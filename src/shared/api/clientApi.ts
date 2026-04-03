import type { GetProductsResponse } from './types';
import { methods } from './vocab';
import { clientEndpoints } from './router';

const processFetch = async <T>(url: string, init: RequestInit): Promise<T> => {
  const res = await fetch(url, init);

  if (!res.ok) {
    throw new Error(`${res.status}`);
  }

  return res.json();
};

const clientApi = {
  products: {
    list: async (query?: string, signal?: AbortSignal) => {
      const init: RequestInit = { method: methods.get, signal };
      const url = query
        ? `${clientEndpoints.prod}?${query}`
        : clientEndpoints.prod;

      return await processFetch<GetProductsResponse>(url, init);
    },
  },
};

export { clientApi };
