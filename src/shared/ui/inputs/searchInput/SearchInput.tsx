import { IconFilter, IconSearch } from '../../icons';
import s from './searchInput.module.scss';

export const SearchInput = () => {
  return (
    <div className={s.search}>
      <div>
        <IconSearch />
        <input
          name="search"
          aria-label="search for foods"
          placeholder="search for foods"
        ></input>
      </div>

      <IconFilter />
    </div>
  );
};
