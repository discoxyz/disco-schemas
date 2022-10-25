import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

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
      required: ["id", "name", "email", "fund", "round"],
      properties: {
        id: { title: "Member DID", type: "string", format: "uri" },
        name: { title: "Name", type: "string" },
        email: { title: "Email", type: "string" },
        fund: { title: "Fund Name", type: "string" },
        round: { title: "Round", type: "string" },
        description: { title: "Description and Notes", type: "string" },
        expiration: { title: "Expiration", type: "string", format: "date" },
      },
    },
  },
} as JSONSchema7;
