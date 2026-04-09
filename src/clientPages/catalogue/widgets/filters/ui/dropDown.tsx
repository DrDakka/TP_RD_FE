import { useState } from 'react';

import s from './dropDown.module.scss';
import { IconCheckCircle, IconCheckSquare, IconChevron } from '@/shared';
import classNames from 'classnames';
type Props<T extends string> = {
  label: string;
  list: T[];
  multiselect: boolean;
  onSelect: (arg: T) => void;
  active?: T[];
};

export const DropDown = <T extends string>({
  label,
  list,
  multiselect,
  onSelect,
  active = [],
}: Props<T>) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={s.dropdown}>
      <button
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
        {...(multiselect && { 'aria-multiselectable': true })}
      >
        <span>{label}</span>

        <IconChevron direction={open ? 'up' : 'down'} />
      </button>
      <ul className={classNames(s.list, { [s['list--active']]: open })}>
        {list.map(el => {
          const act = active.includes(el);

          return (
            <li
              key={el}
              className={classNames(s.listitem, {
                [s['listitem--active']]: act,
              })}
              role="option"
              aria-selected={act}
              onClick={() => onSelect(el)}
            >
              <span>{el}</span>
              {multiselect ? (
                <IconCheckSquare active={act} />
              ) : (
                <IconCheckCircle active={act} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
