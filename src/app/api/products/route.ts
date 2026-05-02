import {
  parseSearchParams,
  productsSearchSchema,
  validateObject,
} from '@/shared';
import { NextRequest, NextResponse } from 'next/server';
import { proxyErrorHandler } from '../_server/errors/errorHandler';
import { backendFetch } from '../_server/backendFetch';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const parsed = parseSearchParams(searchParams);

    validateObject(parsed, productsSearchSchema);

    const qs = searchParams.size ? `?${searchParams}` : '';
    const res = await backendFetch(`/products/${qs}`);

    if (res.status >= 500) {
      return NextResponse.json(
        { error: 'Service unavailable' },
        { status: 502 },
      );
    }

    const data = await res.json().catch(() => ({ error: 'Unknown error' }));

    return NextResponse.json(data, { status: res.status });
  } catch (e) {
    return proxyErrorHandler(e);
  }
}
