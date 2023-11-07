import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/AttestedMetIrlCredential/1-0-0.json",

  title: "Met IRL Credential",
  description: "An attested met IRL credential",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "person1", "person2"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        person1: { title: "The owner", type: "string", format: "uri" },
        person2: { title: "The claimaint", type: "string", format: "uri" },
      },
    },
  },
} as JSONSchema7;
