import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/HackathonPrizeCredential/1-0-0.json",

  title: "Hackathon Prize/Rank Credential",
  description: "Credential attesting to a hackathon participant's specific rank or prize.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        eventName: { title: "Event Name", type: "string" },
        eventDate: { title: "Event Date", type: "string", format: "date" },
        track: { title: "Track/Category", type: "string"},
        bounty: { title: "Bounty", type: "string"},
        prize: { title: "Prize", type: "string"},
      },
    },
  },
} as JSONSchema7;
