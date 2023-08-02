import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/ProofOfMintCredential/1-0-0.json",

  title: "Proof of Mint Credential",
  description: "Proof of Mint proves/recognizes the holder is an original minter of this NFT drop.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        contractAddress: { title: "Contract address", type: "string" },
        dateOfMint: { title: "Date of Mint", type: "string", format: "date" },
        tokenStandard: { title: "Token Standard", type: "string" },
        chain: { title: "Chain", type: "string" },
      },
    },
  },
} as JSONSchema7;
