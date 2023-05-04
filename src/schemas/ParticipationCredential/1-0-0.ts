import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/ParticipationCredential/1-0-0.json",

  title: "Participation Credential",
  description: "Participation attests that the subject participated in an event or gathering hosted by the issuer.",
  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "eventName"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        eventName: { title: "Event Name", type: "string" },
        eventDescription: { title: "Description", type: "string" },
        eventLink: { title: "Link", type: "string" },
        startDate: { title: "Start Date", type: "string", format: "date" },
        endDate: { title: "End Date", type: "string", format: "date" },
      },
    },
  },
} as JSONSchema7;
