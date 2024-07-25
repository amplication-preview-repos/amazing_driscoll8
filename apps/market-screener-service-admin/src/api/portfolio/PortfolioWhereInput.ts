import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";

export type PortfolioWhereInput = {
  id?: StringFilter;
  userId?: IntNullableFilter;
  shares?: IntNullableFilter;
  purchasePrice?: FloatNullableFilter;
  stock?: StockWhereUniqueInput;
};
