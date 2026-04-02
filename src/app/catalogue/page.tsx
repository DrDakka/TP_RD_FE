import { CatalogueContent } from './CatalogueContent';
import { api } from '@/shared/api/api';

type Props = {
  searchParams: Promise<Record<string, string | string[]>>;
};

export default async function CataloguePage({ searchParams }: Props) {
  const primaryProducts = await api.products.list();

  return <CatalogueContent items={primaryProducts.items} />;
}
