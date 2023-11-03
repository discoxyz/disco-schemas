import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/CreativeWorkCredential/1-0-0.json",

  title: "Creative Work Credential",
  description: "Creative Work",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "name"],
      properties: {
        id: { title: "Recipient DID", type: "string" },
        name: { title: "Name (of the creative work)", type: "string" },
        authorName: { title: "Name of artist", type: "string" },
        authorEns: { title: "ENS of artist", type: "string" },
        authorWebsite: { title: "Website of artist", type: "string" },
        exhibition: { title: "Exhibition", type: "string" },
        material: { title: "Material", type: "string" },
        type: {
          title: "Type of art",
          type: "string",
          enum: ["Painting", "Sculpture", "NFT", "Essay", "Wearable", "Accessory"],
        },
        link: { title: "Link to Creative Work", type: "string" },
      },
    },
  },
} as JSONSchema7;
