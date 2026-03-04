import { CloseIcon, MenuIcon, SearchIcon } from '@shared/ui';
import s from './mobileActions.module.scss';

type Props = {
  mobileOpen: boolean;
  onSearchOpen: () => void;
  onMenuToggle: () => void;
};

const MobileActions: React.FC<Props> = ({
  mobileOpen,
  onSearchOpen,
  onMenuToggle,
}) => (
  <div className={s['mobile-actions']}>
    <button
      className={s['mobile-icon-btn']}
      onClick={onSearchOpen}
      aria-label="Open search"
    >
      <SearchIcon size={20} />
    </button>
    <button
      className={s['mobile-icon-btn']}
      onClick={onMenuToggle}
      aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
    >
      {mobileOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  </div>
);

export default MobileActions;
