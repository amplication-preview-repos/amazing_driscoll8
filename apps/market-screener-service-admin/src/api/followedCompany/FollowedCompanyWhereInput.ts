import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";

export type FollowedCompanyWhereInput = {
  id?: StringFilter;
  userId?: IntNullableFilter;
  stock?: StockWhereUniqueInput;
};
