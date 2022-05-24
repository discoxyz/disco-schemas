import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/latest";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/KudosCredential/1-0-0.json",

  title: "Kudos Credential",
  description: "@TODO",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "kudos"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        kudos: { title: "Kudos Text", type: "string" },
      },
    },
  },
} as JSONSchema7;
