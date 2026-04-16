import { IconLogo } from '@/shared/ui/icons';
import Link from 'next/link';
import s from './logo.module.scss';
import classNames from 'classnames';

type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href={'/'} className={classNames(s.container, className)}>
      <IconLogo />
      <span>
        <span className={s.logoMod}>Nutri</span>Space
      </span>
    </Link>
  );
};
