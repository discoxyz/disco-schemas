import { JSONSchema7 } from "json-schema";

import KudosCredential from "./KudosCredential/latest";
import ProfileCredential from "./ProfileCredential/latest";

export { KudosCredential, ProfileCredential };

export const issuableSchemas: JSONSchema7[] = [
  KudosCredential,
  ProfileCredential, // @TODO/tobek remove right?
];
