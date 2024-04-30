import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/SuperlativeCredential/1-0-0.json", // Update the URI to where your schema will be located

  title: "Superlative Credential",
  description:
    "A credential attesting to the exchange of a superlative, including details such as the poll ID, sender, receiver, and the question involved.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "pollId", "receiver", "question"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        pollId: { title: "Poll ID", type: "string" },
        sender: { title: "Sender", type: "string" },
        receiver: { title: "Receiver", type: "string" },
        question: { title: "Question", type: "string" },
      },
    },
  },
} as JSONSchema7;
