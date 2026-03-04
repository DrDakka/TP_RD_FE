import Link from 'next/link';
import cn from 'classnames';
import s from './headerLogo.module.scss';
import { LeafLogo } from '@shared/ui';

type Props = {
  scrolled: boolean;
};

const HeaderLogo: React.FC<Props> = ({ scrolled }) => (
  <Link href="/" className={s.logo}>
    <LeafLogo size={scrolled ? 22 : 26} />
    <div className={s.logo__text}>
      <span className={s.logo__name}>NutriSpace</span>
      <span
        className={cn(s.logo__sub, {
          [s['logo__sub--hidden']]: scrolled,
        })}
      >
        nutrition platform
      </span>
    </div>
  </Link>
);

export default HeaderLogo;
