import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams.toString();
  const url = `${BACKEND_URL}/products/${search ? `?${search}` : ''}`;

  const res = await fetch(url, { cache: 'no-store' });

  if (!res.ok) {
    return NextResponse.json({ error: res.statusText }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
