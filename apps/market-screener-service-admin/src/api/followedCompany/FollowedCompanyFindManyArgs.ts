import { FollowedCompanyWhereInput } from "./FollowedCompanyWhereInput";
import { FollowedCompanyOrderByInput } from "./FollowedCompanyOrderByInput";

export type FollowedCompanyFindManyArgs = {
  where?: FollowedCompanyWhereInput;
  orderBy?: Array<FollowedCompanyOrderByInput>;
  skip?: number;
  take?: number;
};
