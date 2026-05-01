import { NextRequest, NextResponse } from 'next/server';
import { CalculateNormRequest } from '@/shared/api/types';
import { ACTIVITY, MODIFIER, SEX } from '@/shared/api/types/norms/enums';
import type { Activity, Modifier } from '@/shared/api/types/norms/enums';
import { MeasureUnits } from '@/shared/api/types/product/enums';

const activityMultiplier: Record<Activity, number> = {
  [ACTIVITY.SEDENTARY]: 1.2,
  [ACTIVITY.LIGHT]: 1.375,
  [ACTIVITY.MODERATE]: 1.55,
  [ACTIVITY.ACTIVE]: 1.725,
  [ACTIVITY.INTENSIVE]: 1.9,
};

const modifierOffset: Record<Modifier, number> = {
  [MODIFIER.LOSS]: -500,
  [MODIFIER.MAINT]: 0,
  [MODIFIER.GAIN]: 300,
};

export async function POST(req: NextRequest) {
  const body = (await req.json()) as CalculateNormRequest;
  const { age, sex, height, weight, activity, modifier } = body;

  const baseMale = 10 * weight + 6.25 * height - 5 * age + 5;
  const baseFemale = 10 * weight + 6.25 * height - 5 * age - 161;

  const bmr =
    sex === SEX.M
      ? baseMale
      : sex === SEX.F
        ? baseFemale
        : (baseMale + baseFemale) / 2;

  const tdee = Math.round(
    bmr * activityMultiplier[activity] + modifierOffset[modifier],
  );
  const bmi = parseFloat((weight / Math.pow(height / 100, 2)).toFixed(1));

  const macro = {
    cal: tdee,
    prot: Math.round((tdee * 0.25) / 4),
    fat: Math.round((tdee * 0.3) / 9),
    carb: Math.round((tdee * 0.45) / 4),
  };

  return NextResponse.json({
    bmi,
    bmr: Math.round(bmr),
    tdee,
    macro,
    micro: [
      {
        name: 'Вітамін A',
        unit: MeasureUnits.MCG,
        rec_amount: 900,
        max: 3000,
        min: null,
      },
      {
        name: 'Вітамін C',
        unit: MeasureUnits.MG,
        rec_amount: 90,
        max: 2000,
        min: null,
      },
      {
        name: 'Вітамін D',
        unit: MeasureUnits.MCG,
        rec_amount: 15,
        max: 100,
        min: null,
      },
      {
        name: 'Вітамін E',
        unit: MeasureUnits.MG,
        rec_amount: 15,
        max: 1000,
        min: null,
      },
      {
        name: 'Вітамін K',
        unit: MeasureUnits.MCG,
        rec_amount: 120,
        max: null,
        min: null,
      },
      {
        name: 'Вітамін B12',
        unit: MeasureUnits.MCG,
        rec_amount: 2.4,
        max: null,
        min: null,
      },
      {
        name: 'Залізо',
        unit: MeasureUnits.MG,
        rec_amount: sex === SEX.F ? 18 : 8,
        max: 45,
        min: null,
      },
      {
        name: 'Кальцій',
        unit: MeasureUnits.MG,
        rec_amount: 1000,
        max: 2500,
        min: null,
      },
      {
        name: 'Магній',
        unit: MeasureUnits.MG,
        rec_amount: sex === SEX.F ? 320 : 420,
        max: 350,
        min: null,
      },
      {
        name: 'Цинк',
        unit: MeasureUnits.MG,
        rec_amount: sex === SEX.F ? 8 : 11,
        max: 40,
        min: null,
      },
      {
        name: 'Омега-3',
        unit: MeasureUnits.G,
        rec_amount: 1.6,
        max: null,
        min: null,
      },
    ],
  });
}
