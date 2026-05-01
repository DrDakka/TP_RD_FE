import { ACTIVITY, MODIFIER } from '@/shared/api/types/norms/enums';
import { z } from 'zod';

const activityValues = Object.values(ACTIVITY) as [string, ...string[]];
const modifierValues = Object.values(MODIFIER) as [string, ...string[]];

const calculateNorms = z.object({
  age: z.number().min(18).max(120),
  sex: z.enum(['m', 'f']).nullable(),
  height: z.number().min(145).max(220),
  weight: z.number().min(40).max(250),
  body_fat: z.number().min(6).max(70).optional(),
  activity: z.enum(activityValues).optional(),
  modifier: z.enum(modifierValues).optional(),
});

export { calculateNorms };
