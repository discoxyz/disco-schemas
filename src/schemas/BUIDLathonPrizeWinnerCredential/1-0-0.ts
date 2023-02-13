import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/BUIDLathonPrizeWinnerCredential/1-0-0.json",

  title: "BUIDLathon Participant Credential",
  description: "This credential attests to the subject participating at the EthDenver 2023 BUIDLBox hackathon!",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "hackathon_name"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        hackathon_name: { title: "Hackathon Name", type: "string" },
        website: { title: "Website", type: "string" }
      },
    },
  },
} as JSONSchema7;
