import { SortOrder } from "../../util/SortOrder";

export type PortfolioOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  shares?: SortOrder;
  purchasePrice?: SortOrder;
  stockId?: SortOrder;
};
