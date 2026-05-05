import s from './searchDropdown.module.scss';
import classNames from 'classnames';

type Props = {
  visible: boolean;
  query: string;
};

export const SearchDropdown: React.FC<Props> = ({ visible, query }) => {
  return (
    <div
      data-search-dropdown
      className={classNames(s['search-dropdown'], {
        [s['search-dropdown--visible']]: visible,
      })}
    >
      <p>{query}</p>
      <p>Consectetur adipiscing elit</p>
      <p>Sed do eiusmod tempor incididunt</p>
      <p>Ut labore et dolore magna aliqua</p>
      <p>Ut enim ad minim veniam</p>
    </div>
  );
};
