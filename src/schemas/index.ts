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

export {
  BaseVerifiableCredential,
  AccountLinkageCredential,
  KudosCredential,
  ProfileCredential,
  GMCredential,
  OfficialDisconautCredential,
  MembershipCredential,
  AttendanceCredential,
  BetaUserCredential,
  InvestorCredential,
  OrganizationCredential
};

export const issuableSchemas: JSONSchema7[] = [GMCredential, MembershipCredential, BetaUserCredential, InvestorCredential, OrganizationCredential];
