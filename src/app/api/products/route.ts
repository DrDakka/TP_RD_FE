import { NextRequest, NextResponse } from 'next/server';
import { mockProducts } from '../_mock/data';

const PAGE_SIZE = 10;

export function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const search = searchParams.get('search')?.toLowerCase();
  const tag = searchParams.get('tag');
  const props = searchParams.getAll('prop');
  const page = Math.max(1, Number(searchParams.get('page') ?? 1));

  let items = mockProducts.map(p => p.item);

  if (search) {
    items = items.filter(i => i.name.toLowerCase().includes(search));
  }

  if (tag) {
    items = items.filter(i => i.tag === tag);
  }

  if (props.length > 0) {
    items = items.filter(i =>
      props.some(p => i.properties.includes(p as never)),
    );
  }

  const count = items.length;
  const paginated = items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return NextResponse.json({ count, items: paginated });
}
