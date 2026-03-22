import { IconLogo } from '@shared/ui';
import Link from 'next/link';
import s from './footer.module.scss';

export const Footer = () => {
  return (
    <footer>
      <Link href="/" className={s.container}>
        <IconLogo />
        <span>NutriSpace</span>
      </Link>
    </footer>
  );
};
