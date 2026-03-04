import { SearchIcon } from '@shared/ui';
import Link from 'next/link';
import s from './headerActions.module.scss';

type Props = {
  setSearchOpen: (arg: boolean) => void;
};

const HeaderActions: React.FC<Props> = ({ setSearchOpen }) => {
  return (
    <div className={s['header-actions']}>
      <button className={s['search-pill']} onClick={() => setSearchOpen(true)}>
        <SearchIcon />
        <span className={s['search-pill__text']}>Search...</span>
      </button>
      <Link href="/login" className={s['auth-login']}>
        Log in
      </Link>
      <Link href="/signup" className={s['auth-signup']}>
        Sign up
      </Link>
    </div>
  );
};

export default HeaderActions;
