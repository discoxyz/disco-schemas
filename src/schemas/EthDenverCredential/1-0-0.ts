import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id: "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/EthDenverCredential/1-0-0.json",

  title: "Disco @ EthDenver 2023",
  description: "This credential serves as proof of attendance in the Disco-verse for attending our ETHDenver activation. It will be scanned and verified at the entrance to our in-person event!",

  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
      },
    },
  },
} as JSONSchema7;
