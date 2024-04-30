import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/Completion/1-0-0.json",

  title: "Completion",
  description: "Credential that attests to the completion of an educational program or course",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id"],
      properties: {
        id: { title: "Recipient DID", type: "string" },
        socialHandle: { title: "Social Handle", type: "string" },
        socialPlatform: { title: "Social Platform Name", type: "string" },
        appActivity: { title: "App Activity", type: "string" },
        cohort: { title: "Cohort", type: "integer" },
      },
    },
  },
} as JSONSchema7;
