import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/TimedMintReceiptCredential/1-0-0.json",

  title: "Timed Mint Receipt Credential",
  description: "Recognizes the holder participated in a timed mint.",
  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "walletAddress", "name", "publicationId", "publicationName", "timeOfMint", "rank"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        walletAddress: { title: "Wallet Address", type: "string" },
        name: { title: "Name", type: "string" },
        publicationId: { title: "Publication ID", type: "string" },
        publicationName: { title: "Publication Name", type: "string" },
        timeOfMint: { title: "Time of Mint", type: "string", format: "date" },
        rank: { title: "Rank", type: "integer" },
      },
    },
  },
} as JSONSchema7;
