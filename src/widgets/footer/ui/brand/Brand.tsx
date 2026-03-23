import { Logo } from '@shared/ui';
import s from './brand.module.scss';

export const Brand = () => (
  <div data-footer-brand className={s.container}>
    <Logo className={s.logo} />
    <p className={s.tagline}>Track your nutrition, reach your goals!</p>
  </div>
);
