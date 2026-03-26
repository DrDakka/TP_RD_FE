import { NextRequest, NextResponse } from 'next/server';
import { mockProducts } from '../../_mock/data';

export function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  return params.then(({ id }) => {
    const product = mockProducts.find(p => p.item.id === Number(id));

    if (!product) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  });
}
