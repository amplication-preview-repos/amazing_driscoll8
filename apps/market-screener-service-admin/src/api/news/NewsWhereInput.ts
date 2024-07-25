import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";

export type NewsWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  publishedAt?: DateTimeNullableFilter;
  stock?: StockWhereUniqueInput;
};
