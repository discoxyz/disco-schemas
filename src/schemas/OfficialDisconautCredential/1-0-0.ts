import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/OfficialDisconautCredential/1-0-0.json",

  title: "Official Disconaut Credential",
  description:
    "Disconaut attests that the holder has completed Disco onboarding and is the proud owner of a data backpack.",
  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id"],
      properties: {
        id: { title: "Disconaut DID", type: "string", format: "uri" },
      },
    },
  },
} as JSONSchema7;
