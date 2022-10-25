import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/BetaUserCredential/1-0-0.json",

  title: "Beta User Credential",
  description:
    "This credential is for our early beta users or testers who are testing our product before official launch. Thank you for your support and coninued patience!",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id"],
      properties: {
        id: { title: "Recipient DID", type: "string" },
        name: { title: "Name", type: "string" },
      },
    },
  },
} as JSONSchema7;
