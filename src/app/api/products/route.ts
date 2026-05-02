import {
  parseSearchParams,
  productsSearchSchema,
  validateObject,
} from '@/shared';
import { NextRequest, NextResponse } from 'next/server';
import { proxyErrorHandler } from '../_server/errors/errorHandler';
import { defaultHeaders } from '../_server/utils';

const API_URL = process.env.API_URL;

const ABORT_TIMEOUT = 10000;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const parsed = parseSearchParams(searchParams);

    validateObject(parsed, productsSearchSchema);

    const url = `${API_URL}/products/${searchParams.size ? `?${searchParams}` : ''}`;

    const headers = defaultHeaders(req.headers.get('x-forwarded-for') || '');

    const res = await fetch(url, {
      signal: AbortSignal.timeout(ABORT_TIMEOUT),
      method: 'GET',
      headers: headers,
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
