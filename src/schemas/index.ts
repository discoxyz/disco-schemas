import { JSONSchema7 } from "json-schema";

import BaseVerifiableCredential from "./BaseVerifiableCredential/latest";
import AccountLinkageCredential from "./AccountLinkageCredential/latest";
import KudosCredential from "./KudosCredential/latest";
import ProfileCredential from "./ProfileCredential/latest";
import GMCredential from "./GMCredential/latest";
import OfficialDisconautCredential from "./OfficialDisconautCredential/latest";
import OrganizationCredential from "./OrganizationCredential/latest";
import MembershipCredential from "./MembershipCredential/latest";
import AttendanceCredential from "./AttendanceCredential/latest";
import BetaUserCredential from "./BetaUserCredential/latest";
import InvestorCredential from "./InvestorCredential/latest";
import OGTwitterVerificationCredential from "./OGTwitterVerificationCredential/latest";
import PronounsCredential from "./PronounsCredential/latest";

export {
  BaseVerifiableCredential,
  AccountLinkageCredential,
  KudosCredential,
  ProfileCredential,
  PronounsCredential,
  GMCredential,
  OfficialDisconautCredential,
  MembershipCredential,
  AttendanceCredential,
  BetaUserCredential,
  InvestorCredential,
  OrganizationCredential,
  OGTwitterVerificationCredential
};

export const issuableSchemas: JSONSchema7[] = [
  GMCredential,
  MembershipCredential,
  BetaUserCredential,
  InvestorCredential,
  OrganizationCredential,
];
