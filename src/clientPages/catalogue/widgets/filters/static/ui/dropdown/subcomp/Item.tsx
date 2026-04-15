import Link from 'next/link';
import s from './item.module.scss';
type Props<T extends string> = {
  el: T;
  active: boolean;
  href: string;
  onSelect: (arg: T) => void;
  children: React.ReactNode;
};

export const Item = <T extends string>({
  el,
  active,
  href,
  onSelect,
  children,
}: Props<T>) => (
  <li
    key={el}
    className={s.listitem}
    role="option"
    aria-selected={active}
    onClick={() => onSelect(el)}
  >
    <Link href={href} onClick={e => e.preventDefault()}>
      <span>{el}</span>
      {children}
    </Link>
  </li>
);
