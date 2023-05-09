import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/StreakCredential/1-0-0.json",

  title: "Streak Credential",
  description: "Streak recognizes the holder has a streak related to a certain activity. I.e. receiving GMs.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "streakNumber", "activity"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        streakNumber: { title: "Streak Number", type: "string" },
        activity: { title: "Activity", type: "string" },
      },
    },
  },
} as JSONSchema7;
