import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/DigitalAssetScoreCredential/1-0-0.json",

  title: "Digital Asset Credit Score",
  description: "CredProtocol.com's Digital Asset Credit Score is a decentralized credit score that quantifies lending risk at scale, bringing trust and transparency to web3.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "value", "valueRating"],
      properties: {
        id: { title: "Recipient DID", type: "string" },
        value: { title: "Value", type: "string" },
        valueRating: { title: "Value Rating", type: "string" },
      },
    },
  },
} as JSONSchema7;
