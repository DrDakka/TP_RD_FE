import { NextResponse } from 'next/server';
import { backendFetch } from '../../_server/backendFetch';
import { proxyErrorHandler } from '../../_server/errors/errorHandler';
import { requireAuth } from '../../_server/utils';

export async function GET() {
  try {
    await requireAuth();

    const res = await backendFetch('/auth/logout/');

    if (res.status >= 500) {
      return NextResponse.json(
        { error: 'Service unavailable' },
        { status: 502 },
      );
    }

    const data = await res.json().catch(() => ({ error: 'Unknown error' }));
    const response = NextResponse.json(data, { status: res.status });

    res.headers.getSetCookie().forEach(cookie => {
      response.headers.append('Set-Cookie', cookie);
    });

    return response;
  } catch (e) {
    return proxyErrorHandler(e);
  }
}
