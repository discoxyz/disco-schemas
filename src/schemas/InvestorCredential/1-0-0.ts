import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/InvestorCredential/1-0-0.json",

  title: "Investor Credential",
  description: "Credential to be issued to all Disco investors",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "round"],
      properties: {
        id: { title: "Investor DID", type: "string", format: "uri" },
        round: { title: "Round", type: "string" },
        description: { title: "Description and Notes", type: "string" },
        expiration: { title: "Expiration", type: "string", format: "date" },
      },
    },
  },
} as JSONSchema7;
