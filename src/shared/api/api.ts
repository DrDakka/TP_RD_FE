import { endpoints } from './router';
import type {
  FullItem,
  PostBatchRequest,
  GetProductsResponse,
  CalculateNormRequest,
  CalculateNormResponse,
} from './types';
import { headers, methods } from './vocab';

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
