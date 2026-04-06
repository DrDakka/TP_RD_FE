import { MeasureUnits, PropTags, Tags } from './enums';

type ProductNutrient = {
  name: string;
  unit: MeasureUnits;
  amount: number;
};

type CatalogueItem = {
  id: number;
  name: string;
  cal: number;
  prot: number;
  fat: number;
  carb: number;
  tag: Tags;
  properties: PropTags[];
};

type FullItem = {
  item: CatalogueItem;
  micro: ProductNutrient[];
};

type TagMeta = {
  label: string;
  color: string;
};

export type { ProductNutrient, CatalogueItem, FullItem, TagMeta };
