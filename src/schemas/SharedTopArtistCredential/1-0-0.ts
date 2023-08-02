import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/SharedTopArtistCredential/1-0-0.json",

  title: "Shared Top Artist Credential",
  description: "Shared Top Artist. You both love listening to this artist.",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "spotifyUsername", "friendsDid", "friendsSpotifyUsername", "artist"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        spotifyUsername: { title: "Spotify Username", type: "string" },
        friendsDid: { title: "Friend's DID", type: "string" },
        friendsSpotifyUsername: { title: "Friend's Spotify Username", type: "string" },
        artist: { title: "Artist", type: "string" },
        artistLink: { title: "Artist Spotify Link", type: "string" },
      },
    },
  },
} as JSONSchema7;
