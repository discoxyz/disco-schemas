import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/AccountLinkageCredential/1-0-0.json",

  title: "Account Linkage Credential",
  description: "Credential attesting to the issuer DIDs linkage to the given username on the given service",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["type", "username"],
      properties: {
        type: {
          type: "string",
          title: "Type",
          description: 'Type of account, for instance "Twitter" or "Domain Name"',
        },
        username: { type: "string", title: "Username" },
      },
    },
  },
} as JSONSchema7;
