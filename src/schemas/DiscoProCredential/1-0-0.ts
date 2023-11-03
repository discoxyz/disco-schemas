import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/DiscoProCredential/1-0-0.json",

  title: "Disco Pro Credential",
  description:
    "As a Disco Pro subscriber, this credential enables additional types of credentials, early feature releases and other exclusive access.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id"],
      properties: {
        id: { title: "Recipient DID", type: "string" },
        organization: { title: "Organization", type: "string" },
      },
    },
  },
} as JSONSchema7;
