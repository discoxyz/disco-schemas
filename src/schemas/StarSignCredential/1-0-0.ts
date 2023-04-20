import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/StarSignCredential/1-0-0.json",

  title: "Star Sign",
  description: "Self attested credential to your Star/Astrological sign",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "starSign"],
      properties: {
        id: { title: "Recipient DID", type: "string" },
        starSign: {
          type: "string",
          title: "Star Sign",
          enum: [
            "Aries: March 21 - April 19",
            "Taurus: April 20 - May 20",
            "Gemini: May 21 - June 20",
            "Cancer: June 21 - July 22",
            "Leo: July 23 - August 22",
            "Virgo: August 23 - September 22",
            "Libra: September 23 - October 22",
            "Scorpio: October 23 - November 21",
            "Sagittarius: Nov 22 - Dec 21",
            "Capricorn: Dec 22 - Jan 19",
            "Aquarius: Jan 20 - Feb 18",
            "Pisces: Feb 19 -March 20",
          ],
        },
      },
    },
  },
} as JSONSchema7;
