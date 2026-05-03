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
      label={
        multiselect
          ? active.length > 0
            ? `Selected (${active.length})`
            : label
          : active.length === 0
            ? label
            : active[0]
      }
      isSelected={active.length > 0}
      buttonProps={{
        'aria-haspopup': 'listbox',
      }}
    >
      <ul role="listbox" {...(multiselect && { 'aria-multiselectable': true })}>
        {list.map(el => (
          <Item
            el={el}
            active={active.includes(el)}
            key={el}
            href={getHref(el)}
            onSelect={() => onSelect(el)}
          >
            <Icon active={active.includes(el)} />
          </Item>
        ))}
      </ul>
    </DropDown>
  );
};
