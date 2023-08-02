import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/TopArtistsCredential/1-0-0.json",

  title: "Top Artists Credential",
  description: "Top Artists",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: [
        "id",
        "spotifyUsername",
        "startDate",
        "endDate",
        "mostListenedArtist1",
        "mostListenedArtist2",
        "mostListenedArtist3",
      ],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        spotifyUsername: { title: "Spotify Username", type: "string" },
        startDate: { title: "Start Date", type: "string", format: "date" },
        endDate: { title: "End Date", type: "string", format: "date" },
        mostListenedArtist1: { title: "Most Listened Artist 1", type: "string" },
        mostListenedArtist2: { title: "Most Listened Artist 2", type: "string" },
        mostListenedArtist3: { title: "Most Listened Artist 3", type: "string" },
      },
    },
  },
} as JSONSchema7;
