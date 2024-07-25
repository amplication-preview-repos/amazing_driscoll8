import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";

export type PortfolioUpdateInput = {
  userId?: number | null;
  shares?: number | null;
  purchasePrice?: number | null;
  stock?: StockWhereUniqueInput | null;
};
