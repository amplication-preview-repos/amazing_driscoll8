import { Stock } from "../stock/Stock";

export type FollowedCompany = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number | null;
  stock?: Stock | null;
};
