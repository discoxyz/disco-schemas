import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/GMCredential/1-0-0.json",

  title: "GM Credential",
  description: "Send a GM greeting to colleagues and friends in your network.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
      },
    },
  },
} as JSONSchema7;
