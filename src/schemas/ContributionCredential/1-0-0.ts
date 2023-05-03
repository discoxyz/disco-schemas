import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/ContributionCredential/1-0-0.json",

  title: "Contribution",
  description: "Enables you to capture and contextualize contributions made by a person",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "name", "category", "description"],
      properties: {
        id: { title: "Recipient DID", type: "string" },
        name: { title: "DAO Name", type: "string" },
        category: {
          title: "Category",
          type: "string",
          enum: [
            "Content Creation",
            "Improved process",
            "Pull Request",
            "Reviewed code",
            "Research",
            "Discourse",
            "Financial Contribution",
            "Other",
          ],
        },
        description: { title: "Description", type: "string" },
        url: { title: "Contribution URL", type: "string" },
      },
    },
  },
} as JSONSchema7;
