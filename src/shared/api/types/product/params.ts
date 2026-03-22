import { PropTags, Tags } from './enums';

type GetProductsQuery = {
  search?: string;
  page: number;
  tag?: Tags;
  prop?: PropTags[];
};

type PostBatchRequest = {
  ids: number[];
};

export type { GetProductsQuery, PostBatchRequest };
