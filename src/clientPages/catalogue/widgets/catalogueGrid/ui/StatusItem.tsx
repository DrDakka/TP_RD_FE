import Link from 'next/link';
import { LoadStatus } from '@/features';
import s from './statusItem.module.scss';

type Props = {
  stat: LoadStatus;
  onRetry: () => void;
};

export const StatusItem: React.FC<Props> = ({ stat, onRetry }) => {
  if (stat === 'loading')
    return (
      <li className={s.overlay}>
        <span>Loading...</span>
      </li>
    );

  if (stat === 'error')
    return (
      <li className={`${s.overlay} ${s['overlay--error']}`}>
        <span>Something went wrong</span>
        <button onClick={onRetry}>Try again</button>
        <Link href="/">Go to home</Link>
      </li>
    );

  return null;
};
