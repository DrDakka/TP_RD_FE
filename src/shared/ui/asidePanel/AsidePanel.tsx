'use client';

import { type ReactNode } from 'react';
import classNames from 'classnames';
import { useScrollLock } from '@/shared/lib';
import s from './asidePanel.module.scss';

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const AsidePanel = ({ open, onClose, children }: Props) => {
  useScrollLock(open);

  return (
    <>
      <div
        className={classNames(s.backdrop, { [s['backdrop--visible']]: open })}
        onClick={onClose}
        aria-hidden
      />
      <div
        className={classNames(s.panel, { [s['panel--open']]: open })}
        aria-hidden={!open}
      >
        {children}
      </div>
    </>
  );
};
