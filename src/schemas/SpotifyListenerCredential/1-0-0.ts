import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/SpotifyListenerCredential/1-0-0.json",

  title: "Spotify Listener Credential",
  description: "On this day, you had a Spotify account. You have great taste in music and podcasts.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "spotifyUsername"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        spotifyUsername: { title: "Spotify Username", type: "string" },
      },
    },
  },
} as JSONSchema7;
