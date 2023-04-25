import { JSONSchema7 } from "json-schema";

import AccountLinkageCredential from "./AccountLinkageCredential/latest";
import BaseVerifiableCredential from "./BaseVerifiableCredential/latest";
import BetaUserCredential from "./BetaUserCredential/latest";
import CertificateOfCompletionCredential from "./CertificateOfCompletionCredential/latest";
import ContributionCredential from "./ContributionCredential/latest";
import DarkModePrefCredential from "./DarkModePrefCredential/latest";
import EthDenverCredential from "./EthDenverCredential/latest";
import GuestSpeakerCredential from "./GuestSpeakerCredential/latest";
import GMCredential from "./GMCredential/latest";
import InvestorCredential from "./InvestorCredential/latest";
import MembershipCredential from "./MembershipCredential/latest";
import OfficialDisconautCredential from "./OfficialDisconautCredential/latest";
import OGTwitterVerificationCredential from "./OGTwitterVerificationCredential/latest";
import OrganizationCredential from "./OrganizationCredential/latest";
import ParticipationCredential from "./ParticipationCredential/latest";
import PraiseCredential from "./PraiseCredential/latest";
import PrimaryLanguageCredential from "./PrimaryLanguageCredential/latest";
import ProfileCredential from "./ProfileCredential/latest";
import PronounsCredential from "./PronounsCredential/latest";
import SnapsCredential from "./SnapsCredential/latest";
import StarSignCredential from "./StarSignCredential/latest";
import TshirtSizeCredential from "./TshirtSizeCredential/latest";
import VouchCredential from "./VouchCredential/latest";

export {
  AccountLinkageCredential,
  BaseVerifiableCredential,
  BetaUserCredential,
  CertificateOfCompletionCredential,
  ContributionCredential,
  DarkModePrefCredential,
  EthDenverCredential,
  GuestSpeakerCredential,
  GMCredential,
  InvestorCredential,
  MembershipCredential,
  OfficialDisconautCredential,
  OGTwitterVerificationCredential,
  OrganizationCredential,
  ParticipationCredential,
  PraiseCredential,
  PrimaryLanguageCredential,
  ProfileCredential,
  PronounsCredential,
  SnapsCredential,
  StarSignCredential,
  TshirtSizeCredential,
  VouchCredential,
};

export const issuableSchemas: JSONSchema7[] = [
  GMCredential,
  MembershipCredential,
  BetaUserCredential,
  InvestorCredential,
  OrganizationCredential,
];
