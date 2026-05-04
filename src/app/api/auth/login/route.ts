import { loginSchema, validateObject } from '@/shared';
import { NextRequest, NextResponse } from 'next/server';
import { backendFetch } from '../../_server/backendFetch';
import { proxyErrorHandler } from '../../_server/errors/errorHandler';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = validateObject(body, loginSchema);

    const res = await backendFetch('/auth/login/', {
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
    const response = NextResponse.json(data, { status: res.status });

    // eslint-disable-next-line no-console
    console.log('backend set-cookie:', res.headers.getSetCookie());

    res.headers.getSetCookie().forEach(cookie => {
      const sanitized =
        process.env.NODE_ENV === 'development'
          ? cookie
              .split(';')
              .map(p => p.trim())
              .filter(p => p.toLowerCase() !== 'secure')
              .join('; ')
          : cookie;

      response.headers.append('Set-Cookie', sanitized);
    });

    return response;
  } catch (e) {
    return proxyErrorHandler(e);
  }
}
