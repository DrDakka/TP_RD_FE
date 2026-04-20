'use client';

import { DropDown } from '@/shared';
import { IconCheckCircle, IconCheckSquare } from '@/shared';
import { Item } from './subcomp/Item';

type Props<T extends string> = {
  label: string;
  list: T[];
  multiselect: boolean;
  onSelect: (arg: T) => void;
  active?: T[];
  getHref: (arg: T) => string;
};

export const Select = <T extends string>({
  label,
  list,
  multiselect,
  onSelect,
  active = [],
  getHref,
}: Props<T>) => {
  const Icon = multiselect ? IconCheckSquare : IconCheckCircle;

  return (
    <DropDown
      label={label}
      buttonProps={{
        'aria-haspopup': 'listbox',
      }}
    >
      {({ className }) => (
        <ul
          className={className}
          role="listbox"
          {...(multiselect && { 'aria-multiselectable': true })}
        >
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
      )}
    </DropDown>
  );
};
