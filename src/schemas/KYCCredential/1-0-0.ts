import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/KYCCredential/1-0-0.json",

  title: "KYC Credential",
  description: "Verifies a customer's identity.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        verified: { title: "Verified", type: "boolean" },
        verifiedBy: { title: "Verified By", type: "string", format: "uri" },
        custom: {title: "Custom", type: "string"},
      },
    },
  },
} as JSONSchema7;
