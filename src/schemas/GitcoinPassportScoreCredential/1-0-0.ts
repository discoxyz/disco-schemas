import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/GitcoinPassportScoreCredential/1-0-0.json",

  title: "Gitcoin Passport Score Credential",
  description: "Gitcoin Passport is your citizenship pass for the decentralized internet. It enables you to collect verifiable credentials that prove your identity and trustworthiness without exposing personally identifying information",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "score"],
      properties: {
        id: { title: "Recipient DID", type: "string" },
        score: { title: "Score", type: "string" },
        scorerId: { title: "Scorer ID", type: "string" },
        lastGenerated: { title: "Score Generated Timestamp", type: "string", format: "date-time" },
      },
    },
  },
} as JSONSchema7;
