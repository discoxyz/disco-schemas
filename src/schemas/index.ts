import { JSONSchema7 } from "json-schema";

import BaseVerifiableCredential from "./BaseVerifiableCredential/latest";
import AccountLinkageCredential from "./AccountLinkageCredential/latest";
import KudosCredential from "./KudosCredential/latest";
import ProfileCredential from "./ProfileCredential/latest";
import GMCredential from "./GMCredential/latest";
import OfficialDisconautCredential from "./OfficialDisconautCredential/latest";
import MembershipCredential from "./MembershipCredential/latest";
import AttendanceCredential from "./AttendanceCredential/latest";

export {
  BaseVerifiableCredential,
  AccountLinkageCredential,
  KudosCredential,
  ProfileCredential,
  GMCredential,
  OfficialDisconautCredential,
  MembershipCredential,
  AttendanceCredential,
};

export const issuableSchemas: JSONSchema7[] = [GMCredential, MembershipCredential, AttendanceCredential];
