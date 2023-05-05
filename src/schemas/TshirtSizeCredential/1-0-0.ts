import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/TshirtSizeCredential/1-0-0.json",

  title: "Tshirt Size Credential",
  description: "Tshirt Size attests the subject’s t-shirt size.",
  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "tshirtSize"],
      properties: {
        id: { title: "Recipient DID", type: "string" },
        tshirtSize: {
          type: "string",
          title: "Tshirt Size",
          enum: [
            "XS - Unisex",
            "S - Unisex",
            "M - Unisex",
            "L - Unisex",
            "XL - Unisex",
            "XXL - Unisex",
            "XS - Women",
            "S - Women",
            "M - Women",
            "L - Women",
            "XL - Women",
            "XXL - Women",
          ],
        },
      },
    },
  },
} as JSONSchema7;
