import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/CertificateOfCompletionCredential/1-0-0.json",

  title: "Certificate of Completion Credential",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "twitter handle"],
      properties: {
        id: { title: "Recipient DID", type: "string" },
        twitterHandle: { title: "Twitter Handle", type: "string" },
        nameOfCourse: { title: "Name of Course or Program", type: "string" },
        cohort: { title: "Cohort", type: "integer" },
      },
    },
  },
} as JSONSchema7;
