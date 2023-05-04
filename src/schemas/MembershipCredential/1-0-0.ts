import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/MembershipCredential/1-0-0.json",

  title: "Membership Credential",
  description:
    "General Membership attests that the subject is a member in good standing of the issuing organization or group.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "organization"],
      properties: {
        id: { title: "Member DID", type: "string", format: "uri" },
        organization: { title: "Organization Name", type: "string" },
        membershipType: { title: "Membership Type", type: "string" },
        membershipLevel: { title: "Membership Level", type: "string" },
        memberId: { title: "Member ID", type: "string" },
        membershipDescription: { title: "Membership Description", type: "string" },
        expiration: { title: "Expiration", type: "string", format: "date" },
      },
    },
  },
} as JSONSchema7;
