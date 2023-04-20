import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/OrganizationCredential/1-0-0.json",

  title: "Organization",
  description: "Group or Organization unlocks tools for community management.",
  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "organizationName"],
      properties: {
        id: { title: "Organization DID", type: "string", format: "uri" },
        organizationName: { title: "Organization Name", type: "string" },
        organizationType: { title: "Organization Type", type: "string" },
        organizationDescription: { title: "Description", type: "string" },
        expiration: { title: "Expiration", type: "string", format: "date" },
      },
    },
  },
} as JSONSchema7;
