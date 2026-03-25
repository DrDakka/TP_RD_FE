import { api } from '@/shared/api/api';
import { CatalogueContent } from './CatalogueContent';

type Props = {
  searchParams: Promise<Record<string, string | string[]>>;
};

export default async function CataloguePage({ searchParams }: Props) {
  const params = await searchParams;
  const query = new URLSearchParams();

  if (params.search) query.set('search', params.search as string);
  if (params.tag) query.set('tag', params.tag as string);
  if (params.prop) {
    const props = Array.isArray(params.prop) ? params.prop : [params.prop];

    props.forEach(p => query.append('prop', p));
  }

  query.set('page', params.page ? (params.page as string) : '1');

  const data = await api.products.list(query.toString());

  return <CatalogueContent items={data.items} />;
}
