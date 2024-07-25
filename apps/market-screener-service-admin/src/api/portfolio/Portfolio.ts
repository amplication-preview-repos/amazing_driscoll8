import { Stock } from "../stock/Stock";

export type Portfolio = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number | null;
  shares: number | null;
  purchasePrice: number | null;
  stock?: Stock | null;
};
