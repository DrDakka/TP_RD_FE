import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL ?? '';

export const GET = async (req: NextRequest) => {
  const query = req.nextUrl.searchParams.toString();
  const url = query
    ? `${BACKEND_URL}/products?${query}`
    : `${BACKEND_URL}/products`;

  const res = await fetch(url, { method: 'GET' });

  if (!res.ok) {
    return NextResponse.json(null, { status: res.status });
  }

  const data = await res.json();

  return NextResponse.json(data);
};
