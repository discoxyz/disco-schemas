import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/ProfileCredential/1-0-0.json",

  title: "Profile Credential",
  description: "Credential containing profile information",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      properties: {
        id: { title: "DID", type: "string", format: "uri" },
        name: { title: "Name", type: "string" },
        bio: { title: "Bio", type: "string", maxLength: 200 },
        avatar: { title: "Avatar URL", type: "string", format: "uri" },
        banner: { title: "Banner URL", type: "string", format: "uri" },
      },
    },
  },
} as JSONSchema7;
