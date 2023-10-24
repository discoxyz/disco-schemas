import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/StreaksCredential/1-0-0.json",

  title: "Streaks Credential",
  description: "Recognizes the holder has engaged for consecutive days.",
  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "days", "walletAddress", "name"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        days: { title: "Days", type: "integer" },
        walletAddress: { title: "Wallet Address", type: "string" },
        name: { title: "Name", type: "string" },
      },
    },
  },
} as JSONSchema7;
