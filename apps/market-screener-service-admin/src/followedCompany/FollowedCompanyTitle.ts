import { FollowedCompany as TFollowedCompany } from "../api/followedCompany/FollowedCompany";

export const FOLLOWEDCOMPANY_TITLE_FIELD = "id";

export const FollowedCompanyTitle = (record: TFollowedCompany): string => {
  return record.id?.toString() || String(record.id);
};
