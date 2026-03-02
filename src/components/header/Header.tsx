import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        <Link href="/" className={styles.logo} aria-label="nutrispace — на головну">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect
              x="16" y="2"
              width="20" height="20"
              rx="3"
              transform="rotate(45 16 2)"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <span>nutrispace</span>
        </Link>

        <search className={styles.searchWrap}>
          <label htmlFor="global-search" className="visually-hidden">Пошук</label>
          <input
            id="global-search"
            type="search"
            placeholder="Search..."
            className={styles.searchInput}
          />
        </search>

        <nav className={styles.nav} aria-label="Основна навігація">
          <Link href="/catalogue">Catalogue</Link>
          <Link href="/composer">Composer</Link>
          <Link href="/account">Account</Link>
        </nav>

        <div className={styles.actions}>
          <Link href="/favs" aria-label="Обрані">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </Link>
          <Link href="/basket" aria-label="Кошик">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
          </Link>
        </div>

      </div>
    </header>
  );
}
