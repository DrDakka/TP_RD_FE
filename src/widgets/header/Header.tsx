'use client';

import cn from 'classnames';
import { useEffect, useState } from 'react';
import styles from './header.module.scss';
import { HeaderLogo, NavBar, HeaderActions, MobileActions } from './ui';
import SearchDropdown from './ui/searchDropdown/SearchDD';
import MobileNavDropdown from './ui/navDropdown/NavDropdown';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);

    window.addEventListener('scroll', h, { passive: true });

    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <>
      <header
        className={cn(styles.header, {
          [styles['header--scrolled']]: scrolled,
        })}
      >
        <div className={styles.header__inner}>
          <HeaderLogo scrolled={scrolled} />

          <NavBar />

          <HeaderActions setSearchOpen={setSearchOpen} />

          <MobileActions
            mobileOpen={mobileOpen}
            onSearchOpen={() => setSearchOpen(true)}
            onMenuToggle={() => setMobileOpen(!mobileOpen)}
          />
        </div>
      </header>

      <SearchDropdown open={searchOpen} onClose={() => setSearchOpen(false)} />
      <MobileNavDropdown
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
};

export default Header;
