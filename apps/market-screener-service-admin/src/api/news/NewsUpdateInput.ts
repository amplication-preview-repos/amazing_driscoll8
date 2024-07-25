import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";

export type NewsUpdateInput = {
  title?: string | null;
  content?: string | null;
  publishedAt?: Date | null;
  stock?: StockWhereUniqueInput | null;
};
