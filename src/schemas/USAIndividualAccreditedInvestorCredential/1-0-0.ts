import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id:
    "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/USAIndividualAccreditedInvestorCredential/1-0-0.json",

  title: "USA Individual Accredited Investor Credential",
  description: "Recognizes an individual accredited investor.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "regulatoryJurisdiction", "subjectType", "version", "elegibilityChecks"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        regulatoryJurisdiction: { title: "Regulatory Jurisdiction", type: "string" },
        subjectType: { title: "Subject Type", type: "string" },
        version: { title: "Version", type: "string" },
        elegibilityChecks: {
          type: "string",
          title: "Elegibility Checks",
          enum: ["NetWorth", "Income", "Licensing"],
        },
      },
    },
  },
} as JSONSchema7;
