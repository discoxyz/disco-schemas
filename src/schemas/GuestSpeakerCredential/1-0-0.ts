import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/GuestSpeakerCredential/1-0-0.json",

  title: "Guest Speaker Credential",
  description:
    "This credential attests that the holder has spoken publicly. The signer vouches for their voice, and will be for guests of podcasts, classes, and events",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "name"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        name: { title: "Event or Podcast Name", type: "string" },
        link: { title: "Link to Episode", type: "string" },
        episodeNo: { title: "# of episode or class", type: "string" },
        copresenter: { title: "Co-presenters (DIDs, names)", type: "string" },
        org: { title: "Presenting Institution or Organization", type: "string" },
      },
    },
  },
} as JSONSchema7;
