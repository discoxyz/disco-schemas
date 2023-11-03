import { ValidateFunction } from "ajv";
// import "cross-fetch/polyfill";
import fetch from "cross-fetch";
import { JSONSchema7 } from "json-schema";

import { v4 as uuidv4 } from "uuid";
import { addSchemaToVc, convertToPascalCase, getNewAjv } from "./helpers.js";
import { VC } from "./types.js";

export async function validateVcAgainstSchema(
  vc: VC,
  schema: JSONSchema7,
): Promise<{
  valid: boolean;
  errors: string[];
}> {
  let validator: ValidateFunction;
  try {
    const ajv = getNewAjv();
    validator = await ajv.compileAsync(schema);
  } catch (err: any) {
    return {
      errors: [`Failed to compile JSON Schema: ${err.message}. Could not validate.`],
      valid: false,
    };
  }

  let errors: string[] = [];
  //validate schema shape
  const schemaValid = validator(vc);
  if (validator.errors?.length) {
    errors = validator.errors.map((err) => {
      let errorMessage = JSON.stringify(err);
      if (err.message) {
        errorMessage = `${err.message} (${errorMessage})`;
      }
      return errorMessage;
    });
  }

  //check schema title
  const typeToValidate = convertToPascalCase(schema.title ?? "");
  const typeValid = vc.type.some((t) => t === typeToValidate);
  if (!typeValid) {
    errors.push(`Error: Type invalid ${typeToValidate}`);
  }

  //check errors array to see if errors exist
  const valid = errors.length === 0;
  return {
    valid,
    errors,
  };
}

/** Fetches JSON Schema from `credentialSchema.id` field and returns it. Throws error if unable to fetch. */
export async function fetchJsonSchemaFromVc(vc: VC): Promise<JSONSchema7> {
  if (!vc.credentialSchema) {
    throw Error('No "credentialSchema" property found');
  } else if (!vc.credentialSchema.type || vc.credentialSchema.type.indexOf("JsonSchemaValidator") !== 0) {
    throw Error(
      `"credentialSchema.type" value "${vc.credentialSchema.type}" not supported - expecting "JsonSchemaValidator2018"`,
    );
  } else if (!vc.credentialSchema.id) {
    throw Error(`"credentialSchema.id" property not found`);
  }

  return await fetchJsonSchema(vc.credentialSchema.id);
}
/** Fetches JSON Schema from a url and returns it. Throws error if unable to fetch. */
export async function fetchJsonSchema(schemaUrl: string): Promise<JSONSchema7> {
  let res: Response;
  try {
    res = await fetch(schemaUrl);
    if (res.status >= 400) {
      throw Error(`${res.status} response when fetching JSON Schema from ${schemaUrl}`);
    }
  } catch (err: any) {
    throw Error(`Failed to fetch JSON Schema from ${schemaUrl}: ${err.message}`);
  }

  try {
    const responseIsJson = res.headers.get("content-type")?.indexOf("application/json") === 0;
    return responseIsJson ? await res.json() : JSON.parse(await res.text());
  } catch (err: any) {
    throw Error(`Failed to load JSON Schema from ${schemaUrl}, could not get or parse JSON response: ${err.message}`);
  }
}

/** Fetches JSON Schema from `credentialSchema.id` field, validates the VC against that schema, and returns its validity, errors, and the JSON Schema. */
export async function getAndValidateSchemaFromVc(
  vc: VC,
): Promise<{
  valid: boolean;
  errors: string[];
  schema?: JSONSchema7;
}> {
  let schema: JSONSchema7;
  try {
    schema = await fetchJsonSchemaFromVc(vc);
  } catch (err: any) {
    return {
      errors: [`Failed to fetch VC's JSON Schema: ${err.message}. Could not validate.`],
      valid: false,
    };
  }

  const { valid, errors } = await validateVcAgainstSchema(vc, schema);

  return {
    valid,
    errors,
    schema,
  };
}

export function buildVc(issuer: string, credSubject: Record<string, any>, schema: JSONSchema7, recipient?: string): VC {
  const vc: VC = {
    "@context": ["https://www.w3.org/2018/credentials/v1"],
    type: ["VerifiableCredential"],
    issuer: { id: issuer },
    issuanceDate: new Date().toISOString(),
    id: issuer + "#" + uuidv4(),
    credentialSubject: {
      ...credSubject,
      id: recipient,
    },
  };

  if (credSubject.expiration || credSubject.expirationDate) {
    const expirationDateObj = new Date(credSubject.expiration || credSubject.expirationDate);
    if (!isNaN(expirationDateObj.getTime())) {
      vc.expirationDate = expirationDateObj.toISOString();
    }
  }

  return addSchemaToVc(schema, vc, true);
}
