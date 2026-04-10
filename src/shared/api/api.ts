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
  const res = await fetch(url, init);

  if (!res || !res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const api = {
  norms: {
    calculate: async (payload: CalculateNormRequest, signal?: AbortSignal) => {
      const init: RequestInit = {
        method: methods.post,
        headers: headers.appJson,
        body: JSON.stringify(payload),
        signal,
      };

      return await processFetch<CalculateNormResponse>(endpoints.calc, init);
    },
  },
  products: {
    list: async (query?: string, signal?: AbortSignal) => {
      const init: RequestInit = { method: methods.get, signal };
      const url = query ? `${endpoints.prod}?${query}` : endpoints.prod;

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
        headers: headers.appJson,
        body: JSON.stringify(payload),
        signal,
      };

      return await processFetch<FullItem[]>(endpoints.prodBatch, init);
    },
  },
};

export { api };
