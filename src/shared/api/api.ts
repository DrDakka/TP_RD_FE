import { endpoints } from './router';
import type {
  FullItem,
  PostBatchRequest,
  GetProductsResponse,
  CalculateNormResponse,
  UserProfile,
} from './types';
import { headerNames, headers } from './vocab';
import type { z } from 'zod';
import type {
  calculateNormSchema,
  loginSchema,
  registerSchema,
} from '../schemas';

const processFetch = async <T>(url: string, init: RequestInit): Promise<T> => {
  const [path, query] = url.split('?');
  const normalizedPath = path.endsWith('/') ? path : `${path}/`;
  const qs = query ? `?${query}` : '';

  const fullUrl =
    typeof window === 'undefined'
      ? `${process.env.NEXT_PUBLIC_API_URL}/${normalizedPath}${qs}`
      : `/api/${normalizedPath}${qs}`;
  const res = await fetch(fullUrl, init);

  if (!res || !res.ok) {
    const text = await res.text().catch(() => '');

    throw new Error(`${res.status} ${res.statusText}: ${text}`);
  }

  return res.json();
};

const api = {
  norms: {
    calculate: async (
      payload: z.infer<typeof calculateNormSchema>,
      signal?: AbortSignal,
    ) => {
      const init: RequestInit = {
        method: 'POST',
        headers: { ...headers.ct.json, ...headers.accept.json },
        body: JSON.stringify(payload),
        signal,
      };

      return await processFetch<CalculateNormResponse>(endpoints.calc, init);
    },
  },
  auth: {
    login: async (
      payload: z.infer<typeof loginSchema>,
      signal?: AbortSignal,
    ) => {
      const init: RequestInit = {
        method: 'POST',
        headers: {
          ...headers[headerNames.ct].json,
          ...headers[headerNames.accept].json,
        },
        body: JSON.stringify(payload),
        signal,
      };

      return await processFetch<UserProfile>(endpoints.login, init);
    },
    register: async (
      payload: z.infer<typeof registerSchema>,
      signal?: AbortSignal,
    ) => {
      const init: RequestInit = {
        method: 'POST',
        headers: {
          ...headers[headerNames.ct].json,
          ...headers[headerNames.accept].json,
        },
        body: JSON.stringify(payload),
        signal,
      };

      return await processFetch<UserProfile>(endpoints.register, init);
    },
    logout: async (signal?: AbortSignal) => {
      const init: RequestInit = { method: 'GET', signal };

      return await processFetch<void>(endpoints.logout, init);
    },
    me: async (signal?: AbortSignal) => {
      const init: RequestInit = { method: 'GET', signal };

      return await processFetch<UserProfile>(endpoints.me, init);
    },
  },
  products: {
    list: async (query: string = '', signal?: AbortSignal) => {
      const init: RequestInit = { method: 'GET', signal };
      const url = `${endpoints.prod}?${query}`;

      return await processFetch<GetProductsResponse>(url, init);
    },
    batch: async (payload: PostBatchRequest, signal?: AbortSignal) => {
      const init: RequestInit = {
        method: 'GET',
        signal,
      };
      const params = new URLSearchParams();

      payload.ids.forEach(id => params.append('ids', String(id)));

      const url = `${endpoints.prodBatch}?${params.toString()}`;

      return await processFetch<FullItem[]>(url, init);
    },
  },
};

export { api };
