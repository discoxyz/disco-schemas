import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/SnapsCredential/1-0-0.json",

  title: "Snaps Credential",
  description: "Send snaps to celebrate a friend or colleague doing something positive and helpful.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "snapsType"],
      properties: {
        id: { title: "Recipient DID", type: "string" },
        snapsType: {
          type: "string",
          title: "Snaps Type",
          enum: ["Immaculate Vibes: Thank you for your awesome energy", "Problem Solver: Thank you for working with me to solve a tough challenge together",
          "Miracle Worker: Thank you for unexpectedly and proactively doing something awesome that impacted my day for the better!"]
        },
      },
    },
  },
} as JSONSchema7;
