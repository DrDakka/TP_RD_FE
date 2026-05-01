import { endpoints } from '@/shared/api/router';
import { methods, headers as h, headerNames } from '@/shared/api/vocab';
import { calculateNorms, productsSearchSchema } from './schemas';
import z from 'zod';

const hCt = h[headerNames.ct].json;
const hAccept = h[headerNames.accept].json;

const withBody = [hCt, hAccept] as const;
const withoutBody = [hAccept] as const;

const router = {
  [endpoints.calc]: {
    [methods.post]: {
      auth: true,
      searchParams: null,
      schema: calculateNorms,
      headers: withBody,
    },
  },
  [endpoints.prod]: {
    [methods.get]: {
      auth: false,
      searchParams: productsSearchSchema,
      schema: null,
      headers: withoutBody,
    },
  },
  [endpoints.prodById]: {
    [methods.get]: {
      auth: false,
      searchParams: null,
      schema: null,
      headers: withoutBody,
    },
  },
  [endpoints.prodBatch]: {
    [methods.post]: {
      auth: true,
      searchParams: null,
      schema: calculateNorms,
      headers: withBody,
    },
  },
  [endpoints.me]: {
    [methods.get]: {
      auth: true,
      searchParams: null,
      schema: null,
      headers: withoutBody,
    },
  },
  [endpoints.login]: {
    [methods.post]: {
      auth: false,
      searchParams: null,
      schema: calculateNorms,
      headers: withBody,
    },
  },
  [endpoints.logout]: {
    [methods.get]: {
      auth: true,
      searchParams: null,
      schema: calculateNorms,
      headers: withoutBody,
    },
  },
} as const;

type RouterKey = keyof typeof router;

type RouteConfig = {
  searchParams: z.ZodSchema | null;
  schema: z.ZodSchema | null;
  auth: boolean;
  headers: ReadonlyArray<Record<string, string>>;
};

export { router, type RouterKey, type RouteConfig };
