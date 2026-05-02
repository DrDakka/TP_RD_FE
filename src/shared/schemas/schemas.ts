import z from 'zod';
import { PropTags, Tags } from '../api';

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

export { productsSearchSchema, productBatchSchema };
