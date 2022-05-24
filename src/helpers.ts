import Ajv from "ajv";
import addFormats from "ajv-formats";
import slugify from "@sindresorhus/slugify";
import { JSONSchema7 } from "json-schema";
import { VC } from "./types";

export function convertToPascalCase(s: string): string {
  return slugify(s).replace(/(^|-)./g, (x) => x.replace("-", "").toUpperCase());
}

// @TODO support validation here
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
