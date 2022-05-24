import { JSONSchema7 } from "json-schema";

import BaseVerifiableCredential from "./BaseVerifiableCredential/latest";
import KudosCredential from "./KudosCredential/latest";
import ProfileCredential from "./ProfileCredential/latest";

export { BaseVerifiableCredential, KudosCredential, ProfileCredential };

export const issuableSchemas: JSONSchema7[] = [
  KudosCredential,
  ProfileCredential, // @TODO/tobek remove right?
];
