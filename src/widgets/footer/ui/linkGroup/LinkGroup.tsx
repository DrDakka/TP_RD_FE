import Link from 'next/link';
import { IconCheckCircle } from '@/shared/ui/icons';
import s from './linkGroup.module.scss';

type Props = {
  title: string;
  links: ReadonlyArray<{ readonly name: string; readonly href: string }>;
  group: string;
};

export const LinkGroup = ({ title, links, group }: Props) => (
  <div data-footer-group={group} className={s.container}>
    <span className={s.title}>{title}</span>
    <ul className={s.list}>
      {links.map(link => (
        <li key={link.href} className={s.item}>
          <IconCheckCircle />
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);
