'use client';

import { useState } from 'react';
import styles from './dropDown.module.scss';
import { IconChevron } from '../icons';
import cn from 'classnames';

type DropDownProps = {
  label: string;
  children: React.ReactNode;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  isSelected?: boolean;
};

export const DropDown: React.FC<DropDownProps> = ({
  label,
  children,
  buttonProps,
  isSelected,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.dropdown}>
      <button
        {...buttonProps}
        className={cn(styles.trigger, {
          [styles['trigger--selected']]: isSelected,
        })}
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
        type="button"
      >
        <span>{label}</span>

        <IconChevron direction={open ? 'up' : 'down'} />
      </button>

      <div
        className={cn(styles.wrapper, {
          [styles['wrapper--active']]: open,
        })}
      >
        <div className={styles.inner}>{children}</div>
      </div>
    </div>
  );
};
