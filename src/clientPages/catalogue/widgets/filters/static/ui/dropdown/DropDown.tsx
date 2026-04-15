'use client';

import { useState } from 'react';
import s from './dropDown.module.scss';
import { IconCheckCircle, IconCheckSquare, IconChevron } from '@/shared';
import classNames from 'classnames';
import { Item } from './subcomp/Item';

type Props<T extends string> = {
  label: string;
  list: T[];
  multiselect: boolean;
  onSelect: (arg: T) => void;
  active?: T[];
  getHref: (arg: T) => string;
};

export const DropDown = <T extends string>({
  label,
  list,
  multiselect,
  onSelect,
  active = [],
  getHref,
}: Props<T>) => {
  const [open, setOpen] = useState<boolean>(false);

  const Icon = multiselect ? IconCheckSquare : IconCheckCircle;

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
            <Item
              el={el}
              active={act}
              key={el}
              href={getHref(el)}
              onSelect={() => onSelect(el)}
            >
              <Icon active={act} />
            </Item>
          );
        })}
      </ul>
    </div>
  );
};
