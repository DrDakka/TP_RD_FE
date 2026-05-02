import { AppError } from '@/shared';
import { NextResponse } from 'next/server';

const proxyErrorHandler = (e: unknown) => {
  if (e instanceof Error && e.name === 'AbortError') {
    return NextResponse.json({ error: 'Gateway timeout' }, { status: 504 });
  }

  if (e instanceof TypeError && e.message.includes('fetch')) {
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }

  if (e instanceof AppError) {
    return NextResponse.json({ error: e.message }, { status: e.status });
  }

  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
};

export { proxyErrorHandler };
