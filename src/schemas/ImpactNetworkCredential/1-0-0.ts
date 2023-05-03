import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/ImpactNetworkCredential/1-0-0.json",

  title: "Generic Impact Network Credential",
  description: "Verifiable credential for education category in the Impact Network",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "category", "action", "partner", "description"],
      properties: {
        id: { title: "Recipient DID", type: "string" },
        category: { title: "Category", type: "string" },
        action: { title: "Action", type: "string" },
        partner: { title: "Partner", type: "string" },
        description: { title: "Description", type: "string" },
      },
    },
  },
} as JSONSchema7;
