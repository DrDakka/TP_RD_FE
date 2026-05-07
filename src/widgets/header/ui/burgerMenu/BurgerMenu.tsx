'use client';

import { Logo, AsidePanel } from '@/shared';
import { NavBar } from '../navBar/NavBar';
import { BurgerButton } from '../buttons';
import s from './burgerMenu.module.scss';

type Props = {
  open: boolean;
  onClose: () => void;
};

export const BurgerMenu = ({ open, onClose }: Props) => {
  return (
    <AsidePanel open={open} onClose={onClose}>
      <div className={s.content}>
        <Logo className={s.logo} />
        <BurgerButton expanded handler={onClose} />
        <NavBar onNavigate={onClose} />
      </div>
    </AsidePanel>
  );
};
