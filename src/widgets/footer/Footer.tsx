import { navLinks, supportLinks } from './model';
import { Brand, LinkGroup, Newsletter } from './ui';
import s from './footer.module.scss';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.grid}>
        <Brand />

        <LinkGroup group="nav" title="Navigation" links={navLinks} />
        <LinkGroup group="support" title="Support" links={supportLinks} />

        <Newsletter />

        <p data-footer-copyright>
          © {new Date().getFullYear()} NutriSpace. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
