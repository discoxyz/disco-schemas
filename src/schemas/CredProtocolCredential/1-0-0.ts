import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/CredProtocolCredential/1-0-0.json",

  title: "Credential Protocol Score Credential",
  description: "Cred Protocol is a decentralized credit score that quantifies lending risk at scale, bringing trust and transparency to web3.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "value", "value_rating"],
      properties: {
        id: { title: "Recipient DID", type: "string" },
        value: { title: "Value", type: "integer" },
        value_rating: { title: "Value Rating", type: "integer" },
      },
    },
  },
} as JSONSchema7;
