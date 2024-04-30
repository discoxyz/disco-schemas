import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/Attendance/1-0-0.json",

  title: "Attendance",
  description: "Attendance attests that the subject attended an event or gathering hosted by the issuer.",
  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "eventName"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        eventName: { title: "Event Name", type: "string" },
        eventDescription: { title: "Event Description or Link", type: "string" },
        eventDate: { title: "Event Date", type: "string", format: "date" },
      },
    },
  },
} as JSONSchema7;
