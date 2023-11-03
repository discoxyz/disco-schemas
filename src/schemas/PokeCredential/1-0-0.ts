import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/PokeCredential/1-0-0.json",

  title: "Poke Credential",
  description:
    "A poke is a way to say 'hello' to or show interest in a friend without the tedious process of crafting coherent sentences.",
  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
      },
    },
  },
} as JSONSchema7;
