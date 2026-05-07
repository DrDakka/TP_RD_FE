import s from './pagination.module.scss';
import { PAGE_SIZE } from '../../constants';
import Link from 'next/link';
import classNames from 'classnames';
import { IconChevron } from '@/shared';
type Props = {
  count: number;
  handler: (idx: number) => void;
  href: (idx: number) => string;
  current: number;
  apply: () => void;
};

export const Pagination: React.FC<Props> = ({
  count,
  current,
  handler,
  href,
  apply,
}) => {
  const lastPage = Math.ceil(count / PAGE_SIZE);
  const pages = Array.from({ length: lastPage }, (_, i) => i + 1);

  const isFirst = current === 1;
  const isLast = current === lastPage;
  const noPageHref = href(1);

  return (
    <div data-widget="pagination" className={s.container}>
      <button className={s.loadMore} disabled>
        load more
      </button>
      <nav className={s.pagination}>
        <ol>
          <li>
            <Link
              href={isFirst ? noPageHref : href(current - 1)}
              aria-disabled={isFirst}
              className={classNames(s.button, s.back, {
                [s['back--disabled']]: isFirst,
              })}
              onClick={e => {
                if (isFirst) {
                  e.preventDefault();

                  return;
                }

                handler(current - 1);
                apply();
              }}
            >
              <IconChevron direction="left" />
            </Link>
          </li>
          {pages.map(page => (
            <li key={page}>
              <Link
                href={href(page)}
                className={classNames(s.button, {
                  [s['button--active']]: page === current,
                })}
                onClick={e => {
                  e.preventDefault();
                  if (page !== current) {
                    handler(page);
                    apply();
                  }
                }}
              >
                {page}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={isLast ? noPageHref : href(current + 1)}
              aria-disabled={isLast}
              className={classNames(s.button, s.back, {
                [s['back--disabled']]: isLast,
              })}
              onClick={e => {
                if (isLast) {
                  e.preventDefault();

                  return;
                }

                handler(current + 1);
                apply();
              }}
            >
              <IconChevron direction="right" />
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};
