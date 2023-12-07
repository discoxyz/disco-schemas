import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/UberRidesCredential/1-0-0.json",

  title: "Uber Rides Credential",
  description: "ZK Proof credential enables you to get proof of your Uber rides without revealing your personal data.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "userId", "numberOfRides", "proofType", "proofValue"],
      properties: {
        id: { title: "Recipient DID", type: "string" },
        userId: { title: "ID", type: "string" },
        numberOfRides: { title: "Number of rides", type: "string" },
        proofType: { title: "Proof Type", type: "string"},
        proofValue: { title: "Proof Value", type: "string" },
      },
    },
  },
} as JSONSchema7;
