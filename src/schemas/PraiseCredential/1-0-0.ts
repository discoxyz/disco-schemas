import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/PraiseCredential/1-0-0.json",

  title: "Praise",
  description: "Send praise to celebrate a friend or colleague doing something positive and helpful.",
  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "praise"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        praise: { title: "Praise", type: "string" },
      },
    },
  },
} as JSONSchema7;
