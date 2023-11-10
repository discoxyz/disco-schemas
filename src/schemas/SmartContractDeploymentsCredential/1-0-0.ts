import { JSONSchema7 } from "json-schema";
import BaseVerifiableCredential from "../BaseVerifiableCredential/1-0-0.js";

export default {
  ...BaseVerifiableCredential,

  $schema: "http://json-schema.org/draft-07/schema#",
  $id:
    "https://raw.githubusercontent.com/discoxyz/disco-schemas/main/json/SmartContractDeploymentsCredential/1-0-0.json",

  title: "Smart Contract Deployments Credential",
  description: "The number of smart contract deployments associated with the subject’s address.",
  properties: {
    ...BaseVerifiableCredential.properties,

    credentialSubject: {
      type: "object",
      required: ["id", "address", "numberOfDeploys", "chain"],
      properties: {
        id: { title: "Recipient DID", type: "string", format: "uri" },
        address: { title: "Address", type: "integer" },
        numberOfDeploys: { title: "# of Mainnet Smart Contract Deployments", type: "string" },
        chain: { title: "Chain", type: "string" },
      },
    },
  },
} as JSONSchema7;
