import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";

export type FollowedCompanyCreateInput = {
  userId?: number | null;
  stock?: StockWhereUniqueInput | null;
};
