'use client';

import { InputHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import s from './textInput.module.scss';

type Variant = 'default' | 'search';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  variant?: Variant;
  error?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export const TextInput = ({
  variant = 'default',
  error = false,
  leftIcon,
  rightIcon,
  ...rest
}: Props) => {
  if (variant === 'search') {
    return (
      <div className={s.searchContainer}>
        <div className={classNames(s.wrapper, s['wrapper--search'])}>
          {leftIcon && <span className={s.icon}>{leftIcon}</span>}
          <input className={s.input} {...rest} />
        </div>
        {rightIcon && <span className={s.iconOutside}>{rightIcon}</span>}
      </div>
    );
  }

  return (
    <div
      className={classNames(s.wrapper, {
        [s['wrapper--error']]: error,
      })}
    >
      {leftIcon && <span className={s.icon}>{leftIcon}</span>}
      <input className={s.input} {...rest} />
      {rightIcon && <span className={s.icon}>{rightIcon}</span>}
    </div>
  );
};
