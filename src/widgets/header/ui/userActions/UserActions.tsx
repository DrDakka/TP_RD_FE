import Link from 'next/link';
import { uaLinks } from '../../model';
import s from './userActions.module.scss';
import b from '../shared/iconButton.module.scss';

export const UserActions = () => {
  return (
    <nav aria-label="User action navigation" className={s.wrapper}>
      {uaLinks.map(el => (
        <Link
          key={el.href}
          href={el.href}
          aria-label={el.label}
          className={b['icon-button']}
        >
          <el.Icon />
        </Link>
      ))}
    </nav>
  );
};
