import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/WalletAgeCredential/1-0-0.json",

  title: "Wallet Age Credential",
  description: "Age of wallet activity.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "walletAge"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        walletAge: { title: "Wallet Age", type: "string" },
      },
    },
  },
} as JSONSchema7;
