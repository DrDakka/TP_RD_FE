import styles from '@/shared/styles/layout/layout.module.scss';
import { defaultHeaders } from '@/app/api/_server/utils';
import { FullItem } from '@/shared';
import z from 'zod';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';

export const dynamic = 'force-dynamic';
const ABORT_TIMEOUT = 10000;
const API_URL = process.env.API_URL;

const idSchema = z.coerce.number().int().positive();

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const headersList = await headers();
  const parsed = idSchema.safeParse(id);

  if (!parsed.success) {
    notFound();
  }

  const url = `${API_URL}/products/batch/`;

  const xff = headersList.get('x-forwarded-for') ?? undefined;
  const initHeaders = defaultHeaders(xff || '');

  const res = await fetch(url, {
    signal: AbortSignal.timeout(ABORT_TIMEOUT),
    method: 'POST',
    headers: {
      ...initHeaders,
      'Content-Type': 'application/json',
      // ...auth
    },
    body: JSON.stringify({ ids: [parsed.data] }),
  });

  const data: FullItem[] = await res
    .json()
    .catch(() => ({ error: 'Unknown error' }));

  const { item, micro } = data[0];

  return (
    <div className={`${styles.container}`}>
      <h1>{item.name}</h1>
      <span>{item.id}</span>
      <span>{item.tag}</span>
      {item.properties.map(el => (
        <span key={el}>{el}</span>
      ))}
      <dl>
        <dt>Calories</dt>
        <dd>{item.cal}</dd>
        <dt>Protein</dt>
        <dd>{item.prot}</dd>
        <dt>Fats</dt>
        <dd>{item.fat}</dd>
        <dt>Carbohydrates</dt>
        <dd>{item.carb}</dd>
      </dl>

      <dl>
        {micro.map(el => {
          if (!(el.amount === 0)) {
            return (
              <div key={el.name}>
                <dt>{el.name}</dt>
                <dd>{`${el.amount} ${el.unit}`}</dd>
              </div>
            );
          }
        })}
      </dl>
    </div>
  );
}
