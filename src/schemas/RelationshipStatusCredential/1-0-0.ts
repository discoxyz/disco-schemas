import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/RelationshipStatusCredential/1-0-0.json",

  title: "Relationship Status Credential",
  description: "Your relationship status",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "relationshipStatus"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        relationshipStatus: {
          title: "Relationship Status",
          type: "string",
          enum: [
            "Single",
            "In a Relationship",
            "Engaged",
            "Married",
            "It's Complicated",
            "Separated",
            "Divorced",
            "Widowed",
            "In an Open Relationship",
            "In a Civil Union",
            "In a Domestic Partnership",
          ],
        },
      },
    },
  },
} as JSONSchema7;
