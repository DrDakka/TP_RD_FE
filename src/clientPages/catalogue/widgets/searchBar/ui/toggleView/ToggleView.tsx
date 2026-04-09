import { View } from '@/clientPages/catalogue/model';
import s from './toggleView.module.scss';
import classNames from 'classnames';
import { IconList, IconTable } from '@/shared/ui';

type Props = {
  view: View;
  onView: (arg: View) => void;
};

export const ToggleView: React.FC<Props> = ({ view, onView }) => {
  return (
    <div className={s.toggleView}>
      <button
        className={classNames(s.viewBtn, {
          [s['viewBtn--active']]: view === View.LIST,
        })}
        aria-label="List view"
        aria-pressed={view === View.LIST}
        onClick={() => onView(View.LIST)}
      >
        <IconList />
      </button>
      <button
        className={classNames(s.viewBtn, {
          [s['viewBtn--active']]: view === View.GRID,
        })}
        aria-label="Grid view"
        aria-pressed={view === View.GRID}
        onClick={() => onView(View.GRID)}
      >
        <IconTable />
      </button>
    </div>
  );
};
