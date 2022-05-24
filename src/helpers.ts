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

