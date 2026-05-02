import { calculateNormSchema, validateObject } from '@/shared';
import { NextRequest, NextResponse } from 'next/server';
import { backendFetch } from '../../_server/backendFetch';
import { proxyErrorHandler } from '../../_server/errors/errorHandler';
import { requireAuth } from '../../_server/utils';

export async function POST(req: NextRequest) {
  try {
    await requireAuth();

    const body = await req.json();
    const validated = validateObject(body, calculateNormSchema);

    const res = await backendFetch('/norms/calculate/', {
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
