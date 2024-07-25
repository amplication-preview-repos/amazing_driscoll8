import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";

export type FollowedCompanyUpdateInput = {
  userId?: number | null;
  stock?: StockWhereUniqueInput | null;
};
