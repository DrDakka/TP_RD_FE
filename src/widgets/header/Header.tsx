'use client';

import s from './header.module.scss';
import {
  Basket,
  BurgerButton,
  BurgerMenu,
  NavBar,
  LogIn,
  ProfileMenu,
} from './ui';
import { Logo, SearchInput } from '@/shared';
import { useUserStore } from '@/features';
import { useHeader } from './model/useHeader';

export const Header = () => {
  const {
    searchExpanded,
    setSearchExpanded,
    bmExpanded,
    setBmExpanded,
    query,
    setQuery,
    user,
  } = useHeader();

  console.log(user);

  return (
    <>
      <BurgerMenu open={bmExpanded} onClose={() => setBmExpanded(false)} />
      <header className={s.header}>
        <BurgerButton
          expanded={bmExpanded}
          handler={() => setBmExpanded(prev => !prev)}
        />
        <Logo className={s.logo} />
        <SearchInput
          query={query}
          onQuery={e => setQuery(e.target.value)}
          reset={() => setQuery('')}
          expanded={searchExpanded}
          onExpand={setSearchExpanded}
        />
        <NavBar />
        <div className={s.spacer}></div>
        <Basket />
        {user ? (
          <ProfileMenu
            user={{ name: user.username, email: user.email }}
            logIn={() => useUserStore.getState().logout()}
          />
        ) : (
          <LogIn logIn={() => {}} />
        )}
      </header>
    </>
  );
};
