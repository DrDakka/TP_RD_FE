import Link from 'next/link';
import { usePathname } from 'next/navigation';
import s from './navBar.module.scss';
import cn from 'classnames';
import { NAV_LINKS } from '../../model';

const NavBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className={s['nav-desktop']}>
      {NAV_LINKS.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className={cn(s['nav-link'], {
            [s['nav-link--active']]: pathname === href,
          })}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
