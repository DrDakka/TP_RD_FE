import { notFound, redirect } from 'next/navigation';
import { api } from '@/shared/api/api';
import { ValidationError } from '@/shared/errors/ValidationError';
import { getInit, redirectRouter } from './lib';
import { CataloguePage } from '@/clientPages';
import styles from '@/shared/styles/layout/layout.module.scss';

export const dynamic = 'force-dynamic';

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Catalogue({ searchParams }: Props) {
  let initialState, initialData;
  const rawParams = await searchParams;

  try {
    const init = getInit(rawParams);

    if (redirectRouter(rawParams)) {
      redirect(`/catalogue${init.query && `?${init.query}`}`);
    }

    initialState = init.initialState;
    initialData = await api.products.list(init.query);
  } catch (e) {
    if (e instanceof ValidationError) notFound();

    throw e;
  }

  return (
    <main className={styles.container}>
      <h1>Food library</h1>
      <span>
        Browse foods, compare nutrition and add them to your daily log
      </span>
      <CataloguePage initialState={initialState} initialData={initialData} />
    </main>
  );
}
