import { FollowedCompanyCreateNestedManyWithoutStocksInput } from "./FollowedCompanyCreateNestedManyWithoutStocksInput";
import { NewsCreateNestedManyWithoutStocksInput } from "./NewsCreateNestedManyWithoutStocksInput";
import { PortfolioCreateNestedManyWithoutStocksInput } from "./PortfolioCreateNestedManyWithoutStocksInput";

export type StockCreateInput = {
  symbolField?: string | null;
  name?: string | null;
  price?: number | null;
  marketCap?: number | null;
  followedCompanies?: FollowedCompanyCreateNestedManyWithoutStocksInput;
  newsItems?: NewsCreateNestedManyWithoutStocksInput;
  portfolios?: PortfolioCreateNestedManyWithoutStocksInput;
};
