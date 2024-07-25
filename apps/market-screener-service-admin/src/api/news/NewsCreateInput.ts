import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";

export type NewsCreateInput = {
  title?: string | null;
  content?: string | null;
  publishedAt?: Date | null;
  stock?: StockWhereUniqueInput | null;
};
