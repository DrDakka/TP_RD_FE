import z from 'zod';
import { PropTags, Tags } from '../api/types/product/enums';
import { ACTIVITY, MODIFIER, SEX } from '../api/types/norms/enums';

const tagValues = Object.values(Tags) as [string, ...string[]];
const propValues = Object.values(PropTags) as [string, ...string[]];

const productsSearchSchema = z
  .object({
    search: z.string().max(40).optional(),
    page: z.coerce.number().int().min(1).optional(),
    tag: z.enum(tagValues).optional(),
    prop: z.union([z.enum(propValues), z.array(z.enum(propValues))]).optional(),
  })
  .strict();

const productBatchSchema = z
  .object({
    ids: z.preprocess(
      val => (Array.isArray(val) ? val : [val]),
      z.array(z.coerce.number().int().positive()).min(1).max(20),
    ),
  })
  .strict();

const activityValues = Object.values(ACTIVITY) as [string, ...string[]];
const modifierValues = Object.values(MODIFIER) as [string, ...string[]];

const calculateNormSchema = z
  .object({
    age: z.coerce.number().int().min(18).max(120),
    sex: z.enum([SEX.M, SEX.F]).nullable(),
    height_cm: z.coerce.number().int().min(145).max(220),
    weight_kg: z.coerce.number().min(40).max(250),
    body_fat: z.coerce.number().min(0).max(100).optional(),
    activity: z.enum(activityValues),
    modifier: z.enum(modifierValues),
  })
  .strict();

const loginSchema = z
  .object({
    username: z.string().min(1),
    password: z.string().min(1),
  })
  .strict();

const registerSchema = z
  .object({
    username: z.string().min(1),
    email: z.email(),
    password: z.string().min(1),
    password_confirm: z.string().min(1),
  })
  .strict();

export { productsSearchSchema, productBatchSchema, calculateNormSchema, loginSchema, registerSchema };
