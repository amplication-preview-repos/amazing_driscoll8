import { SortOrder } from "../../util/SortOrder";

export type StockOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  symbolField?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  marketCap?: SortOrder;
};
