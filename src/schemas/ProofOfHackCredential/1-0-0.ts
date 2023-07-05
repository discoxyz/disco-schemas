import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/ProofOfHackCredential/1-0-0.json",

  title: "Proof of Hack Credential",
  description: "Proof of Hack recognizes the holder for participating in a Hackathon.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "eventName", "eventDate"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        eventName: { title: "Event  Name", type: "string" },
        eventDate: { title: "Event Date", type: "string", format: "date" },
        projectName: { title: "Project Name", type: "string" },
        place: { title: "Place", type: "string" },
        teamName: { title: "Team Name", type: "string" },
        sourceCodeUrl: { title: "Source Code Url", type: "string" },
        usageLink: { title: "Usage Link", type: "string" },
      },
    },
  },
} as JSONSchema7;
