import { PropTags, Tags } from '@/shared/api/types/product/enums';
import { z } from 'zod';

const tagValues = Object.values(Tags) as [string, ...string[]];
const propValues = Object.values(PropTags) as [string, ...string[]];

const productsSearchSchema = z.object({
  search: z.string().max(40).optional(),
  page: z.coerce.number().int().min(1).optional(),
  tag: z.enum(tagValues).optional(),
  prop: z.union([z.enum(propValues), z.array(z.enum(propValues))]).optional(),
});

export { productsSearchSchema };
