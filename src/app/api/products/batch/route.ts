import { NextRequest, NextResponse } from 'next/server';
import { mockProducts } from '../../_mock/data';

export async function POST(req: NextRequest) {
  const { ids } = (await req.json()) as { ids: number[] };

  const items = mockProducts.filter(p => ids.includes(p.item.id));

  return NextResponse.json(items);
}
