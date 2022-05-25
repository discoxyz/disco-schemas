import { JSONSchema7 } from "json-schema";

import BaseVerifiableCredential from "./BaseVerifiableCredential/latest";
import AccountLinkageCredential from "./AccountLinkageCredential/latest";
import KudosCredential from "./KudosCredential/latest";
import ProfileCredential from "./ProfileCredential/latest";

export { BaseVerifiableCredential, AccountLinkageCredential, KudosCredential, ProfileCredential };

export const issuableSchemas: JSONSchema7[] = [
  KudosCredential,
  ProfileCredential, // @TODO/tobek remove right?
];
