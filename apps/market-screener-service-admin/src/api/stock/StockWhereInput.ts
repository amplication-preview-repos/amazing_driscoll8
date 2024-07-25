import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { FollowedCompanyListRelationFilter } from "../followedCompany/FollowedCompanyListRelationFilter";
import { NewsListRelationFilter } from "../news/NewsListRelationFilter";
import { PortfolioListRelationFilter } from "../portfolio/PortfolioListRelationFilter";

export type StockWhereInput = {
  id?: StringFilter;
  symbolField?: StringNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  marketCap?: FloatNullableFilter;
  followedCompanies?: FollowedCompanyListRelationFilter;
  newsItems?: NewsListRelationFilter;
  portfolios?: PortfolioListRelationFilter;
};
