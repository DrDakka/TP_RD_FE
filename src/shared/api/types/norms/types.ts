import { Activity, Modifier, Sex } from './enums';
import { MeasureUnits } from '../product/enums';

type NutrientSchema = {
  name: string;
  unit: MeasureUnits;
  rec_amount: number;
  max: number | null;
  min: number | null;
};

type MacroSchema = {
  cal: number;
  prot: number;
  fat: number;
  carb: number;
};

type CalculateNormRequest = {
  age: number;
  sex: Sex | null;
  height: number;
  weight: number;
  body_fat: number;
  activity: Activity;
  modifier: Modifier;
};

type CalculateNormResponse = {
  bmi: number;
  bmr: number;
  tdee: number;
  macro: MacroSchema;
  micro: NutrientSchema[];
};

export type {
  NutrientSchema,
  MacroSchema,
  CalculateNormRequest,
  CalculateNormResponse,
};
