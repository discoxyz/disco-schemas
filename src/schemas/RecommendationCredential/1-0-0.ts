import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/RecommendationCredential/1-0-0.json",

  title: "Recommendation Credential",
  description: "Sending over someone who passes the vibe check.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "recommendedPerson", "recommendationType"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        recommendedPerson: { title: "Recommended Person DID", type: "string", format: "uri" },
        socialHandle: { title: "Recommended Person Social Handle", type: "string" },
        recommendationType: {
          type: "string",
          title: "I think you should",
          enum: ["Be Friends", "Work Together", "Know About"],
        },
      },
    },
  },
} as JSONSchema7;
