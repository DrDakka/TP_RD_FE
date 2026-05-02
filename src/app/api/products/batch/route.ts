import {
  parseSearchParams,
  productBatchSchema,
  validateObject,
} from '@/shared';
import { NextRequest, NextResponse } from 'next/server';
import { proxyErrorHandler } from '../../_server/errors/errorHandler';
import { backendFetch } from '../../_server/backendFetch';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const parsed = parseSearchParams(searchParams);

    const validated = validateObject(parsed, productBatchSchema);

    const res = await backendFetch('/products/batch/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validated),
    });

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
