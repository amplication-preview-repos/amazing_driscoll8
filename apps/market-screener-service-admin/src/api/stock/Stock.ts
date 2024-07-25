import { FollowedCompany } from "../followedCompany/FollowedCompany";
import { News } from "../news/News";
import { Portfolio } from "../portfolio/Portfolio";

export type Stock = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  symbolField: string | null;
  name: string | null;
  price: number | null;
  marketCap: number | null;
  followedCompanies?: Array<FollowedCompany>;
  newsItems?: Array<News>;
  portfolios?: Array<Portfolio>;
};
