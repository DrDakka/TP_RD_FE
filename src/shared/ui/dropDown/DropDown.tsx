'use client';

import { useState } from 'react';
import styles from './dropDown.module.scss';
import { IconChevron } from '../icons';
import cn from 'classnames';

type DropDownProps = {
  label: string;
  children: (props: { className: string }) => React.ReactNode;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
};

export const DropDown: React.FC<DropDownProps> = ({
  label,
  children,
  buttonProps,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.dropdown}>
      <button
        {...buttonProps}
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
        type="button"
      >
        <span>{label}</span>

        <IconChevron direction={open ? 'up' : 'down'} />
      </button>

      {children({
        className: cn(styles.wrapper, {
          [styles['wrapper--active']]: open,
        }),
      })}
    </div>
  );
};
