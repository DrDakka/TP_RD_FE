import { endpoints } from './router';
import type {
  FullItem,
  PostBatchRequest,
  GetProductsResponse,
  CalculateNormRequest,
  CalculateNormResponse,
} from './types';
import { headers, methods } from './vocab';

const BASE_URL =
  typeof window !== 'undefined'
    ? ''
    : process.env.VERCEL_URL
      ? process.env.VERCEL_URL
      : 'http://localhost:3000';

const processFetch = async <T>(url: string, init: RequestInit): Promise<T> => {
  const [path, query] = url.split('?');
  const normalizedPath = path.endsWith('/') ? path : `${path}/`;
  const fullUrl = `${BASE_URL}/api/${normalizedPath}${query ? `?${query}` : ''}`;
  const res = await fetch(fullUrl, init);

  if (!res || !res.ok) {
    const text = await res.text().catch(() => '');

    throw new Error(`${res.status} ${res.statusText}: ${text}`);
  }

  return res.json();
};

const api = {
  norms: {
    calculate: async (payload: CalculateNormRequest, signal?: AbortSignal) => {
      const init: RequestInit = {
        method: methods.post,
        headers: { ...headers.ct.json, ...headers.accept.json },
        body: JSON.stringify(payload),
        signal,
      };

      return await processFetch<CalculateNormResponse>(endpoints.calc, init);
    },
  },
  products: {
    list: async (query: string = '', signal?: AbortSignal) => {
      const init: RequestInit = { method: methods.get, signal };
      const url = `${endpoints.prod}?${query}`;

      return await processFetch<GetProductsResponse>(url, init);
    },

    byId: async (id: number, signal?: AbortSignal) => {
      const init: RequestInit = { method: methods.get, signal };
      const url = `${endpoints.prod}${id}/`;

      return await processFetch<FullItem>(url, init);
    },
    batch: async (payload: PostBatchRequest, signal?: AbortSignal) => {
      const init: RequestInit = {
        method: methods.post,
        headers: { ...headers.ct.json, ...headers.accept.json },
        body: JSON.stringify(payload),
        signal,
      };

      return await processFetch<FullItem[]>(endpoints.prodBatch, init);
    },
  },
};

export { api };
