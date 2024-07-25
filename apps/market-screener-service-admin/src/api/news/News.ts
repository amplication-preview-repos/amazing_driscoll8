import { Stock } from "../stock/Stock";

export type News = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  content: string | null;
  publishedAt: Date | null;
  stock?: Stock | null;
};
