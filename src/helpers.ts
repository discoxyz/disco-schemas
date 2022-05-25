import Ajv from "ajv";
import addFormats from "ajv-formats";
import slugify from "@sindresorhus/slugify";
import { JSONSchema7 } from "json-schema";
import { VC } from "./types";

export function convertToPascalCase(s: string): string {
  return slugify(s).replace(/(^|-)./g, (x) => x.replace("-", "").toUpperCase());
}

// @TODO Optionally support validating by the given schema here?
/** Automatically add the `credentialSchema` field to the given VC and, optionally, append schema name to `type`. */
export function addSchemaToVc(schema: JSONSchema7, vc: VC, includeType?: boolean): VC {
  if (!schema.$id) {
    throw Error("Schema missing $id property: can't use for VC credentialSchema field");
  }
  return {
    ...vc,

    type: includeType && schema.title ? vc.type.concat(convertToPascalCase(schema.title)) : vc.type,

    credentialSchema: {
      id: schema.$id,
      type: "JsonSchemaValidator2018",
    },
  };
}

async function loadSchema(uri: string) {
  const res = await fetch(uri);
  if (res.status >= 400) {
    throw new Error("Loading error: " + res.status);
  }
  const json = await res.json();

  // workaround for https://github.com/w3c-ccg/traceability-vocab/issues/219
  if (json.$schema === "https://json-schema.org/draft-07/schema#") {
    json.$schema = "http://json-schema.org/draft-07/schema#";
  }

  return json;
}

export const getNewAjv = (): Ajv => {
  const ajv = new Ajv({ loadSchema });
  ajv.addKeyword("$metadata");
  addFormats(ajv);
  return ajv;
};

export const EXAMPLE_VC: VC = {
  "@context": ["https://www.w3.org/2018/credentials/v1"],
  type: ["VerifiableCredential", "AccountLinkageCredential"],
  issuer: { id: "did:ethr:0x02f4b0ceed160cccb47a66951baffac8a8ace75c33b761beb545e3ec99f44300fd" },
  issuanceDate: "2022-04-13T11:32:41.000Z",
  credentialSubject: {
    id: "did:ethr:0x02f4b0ceed160cccb47a66951baffac8a8ace75c33b761beb545e3ec99f44300fc",
    type: "Twitter",
    username: "example_username",
  },
  credentialSchema: {
    id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/AccountLinkageCredential/1-0-0.json",
    type: "JsonSchemaValidator2018",
  },
};
