import { JSONSchema7 } from "json-schema";
import { baseVcJsonSchema } from "../../helpers";

export default {
  ...baseVcJsonSchema,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/ProfileCredential/1-0-0.json",

  title: "Profile Credential",
  description: "@TODO",

  properties: {
    ...baseVcJsonSchema.properties,

    credentialSubject: {
      type: "object",
      properties: {
        name: { title: "Name", type: "string" },
        bio: { title: "Bio", type: "string", maxLength: 200 },
        avatar: { title: "Avatar URL", type: "string", format: "uri" },
        banner: { title: "Banner URL", type: "string", format: "uri" }
      },
    },
  },
} as JSONSchema7;
