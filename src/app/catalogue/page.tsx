import { notFound } from 'next/navigation';
import { api } from '@/shared/api/api';
import { ValidationError } from './lib/ValidationError';
import { getInit } from './lib/init/getInit';
import { ClientPage } from './ui/ClientPage';

export const dynamic = 'force-dynamic';

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function CataloguePage({ searchParams }: Props) {
  let initialState, initialData;

  try {
    const init = getInit(await searchParams);

    initialState = init.initialState;
    initialData = await api.products.list(init.query);
  } catch (e) {
    if (e instanceof ValidationError) notFound();

    throw e;
  }

  return <ClientPage initialState={initialState} initialData={initialData} />;
}
