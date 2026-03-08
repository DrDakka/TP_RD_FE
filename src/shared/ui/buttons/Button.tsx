'use client';

import { useState } from 'react';
import s from './buttons.module.scss';
import classNames from 'classnames';

type Variant = 'primary' | 'secondary' | 'ghost' | 'destructive';
type Size = 's' | 'm' | 'l';

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  pressable?: boolean;
  variant?: Variant;
  size?: Size;
};

export const Button: React.FC<Props> = ({
  onClick,
  children,
  disabled = false,
  pressable = false,
  variant = 'primary',
  size = 's',
}) => {
  const [pressed, setPressed] = useState<boolean>(false);
  const getCN = () =>
    classNames(s['btn-base'], s[`size-${size}`], s[`btn-${variant}`], {
      [s[`btn-${variant}--pressed`]]: pressed === true && pressable === true,
    });

  return (
    <button
      disabled={disabled}
      aria-pressed={pressable ? pressed : undefined}
      className={getCN()}
      onClick={() => {
        setPressed(!pressed);
        onClick();
      }}
    >
      {children}
    </button>
  );
};
