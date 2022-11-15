import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/DarkModePrefCredential/1-0-0.json",

  title: "Dark Mode Preference Credential",
  description:
    "This credential is a self-attested credential to indicate whether you have a preference for dark/light mode.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "preference"],
      properties: {
        id: { title: "Recipient DID", type: "string" },
        preference: {
          type: "string",
          title: "Preference",
          enum: [
            "No",
            "Yes"
          ],
          enumNames: [
            "Light",
            "Dark"
          ]
        },
      },
    }
  },
} as JSONSchema7;