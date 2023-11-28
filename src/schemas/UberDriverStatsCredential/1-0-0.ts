import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id:
    "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/UberDriverStatsCredential/1-0-0.json",

  title: "Uber Driver Stats Credential",
  description: "The number of Uber rides associated with the subjects address.",
  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "numberOfRides"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        numberOfRides: {
          type: "object",
          required: ["type", "zkp"],
          properties: {
            type: { type: "string" },
            zkp: {
              type: "object",
              required: ["proofType, proofValue"],
              properties: {
                proofType: { type: "string" },
                proofValue: { type: "string"}
              }
            },
          }
        },
      },
    },
    
  },
} as JSONSchema7;
