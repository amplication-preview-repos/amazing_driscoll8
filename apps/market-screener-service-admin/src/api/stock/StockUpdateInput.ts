import { FollowedCompanyUpdateManyWithoutStocksInput } from "./FollowedCompanyUpdateManyWithoutStocksInput";
import { NewsUpdateManyWithoutStocksInput } from "./NewsUpdateManyWithoutStocksInput";
import { PortfolioUpdateManyWithoutStocksInput } from "./PortfolioUpdateManyWithoutStocksInput";

export type StockUpdateInput = {
  symbolField?: string | null;
  name?: string | null;
  price?: number | null;
  marketCap?: number | null;
  followedCompanies?: FollowedCompanyUpdateManyWithoutStocksInput;
  newsItems?: NewsUpdateManyWithoutStocksInput;
  portfolios?: PortfolioUpdateManyWithoutStocksInput;
};
