import { JSONSchema7 } from "json-schema";

import AccountLinkageCredential from "./AccountLinkageCredential/latest";
import AttendanceCredential from "./AttendanceCredential/latest";
import BaseVerifiableCredential from "./BaseVerifiableCredential/latest";
import BetaUserCredential from "./BetaUserCredential/latest";
import DarkModePrefCredential from "./DarkModePrefCredential/latest";
import GMCredential from "./GMCredential/latest";
import InvestorCredential from "./InvestorCredential/latest";
import KudosCredential from "./KudosCredential/latest";
import MembershipCredential from "./MembershipCredential/latest";
import OfficialDisconautCredential from "./OfficialDisconautCredential/latest";
import OGTwitterVerificationCredential from "./OGTwitterVerificationCredential/latest";
import OrganizationCredential from "./OrganizationCredential/latest";
import PrimaryLanguageCredential from "./PrimaryLanguageCredential/latest";
import ProfileCredential from "./ProfileCredential/latest";
import PronounsCredential from "./PronounsCredential/latest";
import SnapsCredential from "./SnapsCredential/latest";
import TshirtSizeCredential from "./TshirtSizeCredential/latest";
import StarSignCredential from "./StarSignCredential/latest";
import VouchCredential from "./VouchCredential/latest"

export {
  AccountLinkageCredential,
  AttendanceCredential,
  BaseVerifiableCredential,
  BetaUserCredential,
  DarkModePrefCredential,
  GMCredential,
  InvestorCredential,
  KudosCredential,
  MembershipCredential,
  OfficialDisconautCredential,
  OGTwitterVerificationCredential,
  OrganizationCredential,
  PrimaryLanguageCredential,
  ProfileCredential,
  PronounsCredential,
  SnapsCredential,
  TshirtSizeCredential,
  StarSignCredential,
  VouchCredential
};

export const issuableSchemas: JSONSchema7[] = [
  GMCredential,
  MembershipCredential,
  BetaUserCredential,
  InvestorCredential,
  OrganizationCredential,
];
