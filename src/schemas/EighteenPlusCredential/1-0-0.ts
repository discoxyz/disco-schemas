import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/EighteenPlusCredential/1-0-0.json",

  title: "Eighteen Plus Credential",
  description: "Self attested credential to your age.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "confirmation"],
      properties: {
        id: { title: "Recipient DID", type: "string" },
        confirmation: { title: "I'm at least 18 years old", type: "boolean" },
      },
    },
  },
} as JSONSchema7;
