import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/PronounsCredential/1-0-0.json",

  title: "Pronouns Credential",
  description: "Credential containing self-attested pronoun preferences.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "pronoun"],
      properties: {
        id: { title: "Recipient DID", type: "string" },
        pronoun: {
          type: "string",
          title: "Pronoun Preference",
          enum: ["They/Them/Theirs", "She/Her/Hers", "He/Him/His"],
        },
      },
    },
  },
} as JSONSchema7;
