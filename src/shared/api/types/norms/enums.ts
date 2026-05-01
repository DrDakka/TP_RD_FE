const SEX = {
  M: 'm',
  F: 'f',
  NULL: null,
} as const;

const ACTIVITY = {
  SEDENTARY: 'sedentary',
  LIGHT: 'light',
  MODERATE: 'moderate',
  ACTIVE: 'active',
  INTENSIVE: 'intensive',
} as const;

const MODIFIER = {
  LOSS: 'loss',
  MAINT: 'maint',
  GAIN: 'gain',
} as const;

type Sex = (typeof SEX)[keyof typeof SEX];
type Activity = (typeof ACTIVITY)[keyof typeof ACTIVITY];
type Modifier = (typeof MODIFIER)[keyof typeof MODIFIER];

export { SEX, ACTIVITY, MODIFIER };
export type { Sex, Activity, Modifier };
