import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";

export type PortfolioCreateInput = {
  userId?: number | null;
  shares?: number | null;
  purchasePrice?: number | null;
  stock?: StockWhereUniqueInput | null;
};
