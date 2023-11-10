import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/MetInRealLifeCredential/1-0-0.json",

  title: "Met In Real Life Credential",
  description: "We met in real life.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id"],
      properties: {
        id: { title: "Member DID", type: "string", format: "uri" },
        event: { title: "Event", type: "string" },
        identifier: { title: "Identifier (handle, email, link)", type: "string" },
        location: { title: "Location", type: "string" },
        superEvent: { title: "SuperEvent (Conference, Festival or Gathering)", type: "string" },
      },
    },
  },
} as JSONSchema7;
