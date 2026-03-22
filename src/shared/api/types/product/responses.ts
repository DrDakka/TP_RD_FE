import { CatalogueItem } from './types';

type GetProductsResponse = {
  count: number;
  items: CatalogueItem[];
};

export type { GetProductsResponse };
