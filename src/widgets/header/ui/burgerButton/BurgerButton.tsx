import { IconList, IconPlus } from '@shared/ui';
import s from '../shared/iconButton.module.scss';

type Props = {
  expanded: boolean;
  handler: () => void;
};
export const BurgerButton: React.FC<Props> = ({ expanded, handler }) => {
  const data = expanded
    ? {
        label: 'Close menu',
        expanded: true,
        Icon: <IconPlus cross />,
      }
    : {
        label: 'Open menu',
        expanded: false,
        Icon: <IconList />,
      };

  return (
    <button
      data-header-burger
      className={s['icon-button']}
      aria-label={data.label}
      aria-expanded={data.expanded}
      onClick={handler}
    >
      {data.Icon}
    </button>
  );
};
