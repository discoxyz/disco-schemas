import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/OGTwitterVerificationCredential/1-0-0.json",

  title: "OG Twitter Verified",
  description:
    "OG Twitter Verification attests that the subject owned a verified Twitter account before November 5. 2022.",
  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "twitterId", "twitterHandle"],
      properties: {
        id: { title: "Recipient DID", type: "string" },
        snapshotDate: { title: "Snapshot Date", type: "string", format: "date" },
        twitterId: { title: "Twitter ID", type: "string" },
        twitterHandle: { title: "Twitter Handle", type: "string" },
        snapshotURI: { title: "Snapshot URI", type: "string", format: "uri" },
      },
    },
  },
} as JSONSchema7;
