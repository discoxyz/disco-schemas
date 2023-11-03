import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/BookmarkCredential/1-0-0.json",

  title: "Bookmark Credential",
  description: "GM, Reader. Collect this bookmark and stack it on your digital shelf.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id"],
      properties: {
        id: { title: "Subject DID", type: "string" },
        publication: { title: "Publication", type: "string" },
        volume: { title: "Volume", type: "string" },
        issue: { title: "Issue", type: "string" },
        link: { title: "Link", type: "string", format: "uri" },
      },
    },
  },
} as JSONSchema7;
