import { IconLogo } from '@shared/ui';
import Link from 'next/link';
import s from './logo.module.scss';

export const Logo = () => {
  return (
    <Link href="/" data-header-logo className={s.container}>
      <IconLogo />
      <span>NutriSpace</span>
    </Link>
  );
};
