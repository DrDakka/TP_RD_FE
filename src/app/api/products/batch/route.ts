import {
  parseSearchParams,
  productBatchSchema,
  validateObject,
} from '@/shared';
import { NextRequest, NextResponse } from 'next/server';
import { defaultHeaders } from '../../_server/utils';
import { proxyErrorHandler } from '../../_server/errors/errorHandler';

const API_URL = process.env.API_URL;
const ABORT_TIMEOUT = 10000;

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const parsed = parseSearchParams(searchParams);

    const validated = validateObject(parsed, productBatchSchema);

    const url = `${API_URL}/products/batch/`;

    const headers = defaultHeaders(req.headers.get('x-forwarded-for') || '');

    /*
    const auth = getAuthHeaders(req);

    if (!auth) {
      throw new UnauthorizedError();
    }
    */

    const res = await fetch(url, {
      signal: AbortSignal.timeout(ABORT_TIMEOUT),
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json',
        // ...auth
      },
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
