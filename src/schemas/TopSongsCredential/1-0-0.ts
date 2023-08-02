import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/TopSongsCredential/1-0-0.json",

  title: "Top Songs Credential",
  description: "Top Songs. You listened to these songs most over the time span of this credential.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: [
        "id",
        "spotifyUsername",
        "startDate",
        "endDate",
        "mostListenedSong1",
        "mostListenedSong1Artist",
        "mostListenedSong2",
        "mostListenedSong2Artist",
        "mostListenedSong3",
        "mostListenedSong3Artist",
      ],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        spotifyUsername: { title: "Spotify Username", type: "string" },
        startDate: { title: "Start Date", type: "string", format: "date" },
        endDate: { title: "End Date", type: "string", format: "date" },
        mostListenedSong1: { title: "Most Listened Song 1", type: "string" },
        mostListenedSong1Artist: { title: "Most Listened Song 1 Artist", type: "string" },
        mostListenedSong2: { title: "Most Listened Song 2", type: "string" },
        mostListenedSong2Artist: { title: "Most Listened Song 2 Artist", type: "string" },
        mostListenedSong3: { title: "Most Listened Song 3", type: "string" },
        mostListenedSong3Artist: { title: "Most Listened Song 3 Artist", type: "string" },
      },
    },
  },
} as JSONSchema7;
