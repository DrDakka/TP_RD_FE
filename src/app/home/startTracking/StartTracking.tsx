import Link from 'next/link';
import styles from './startTracking.module.scss';

export const StartTracking = () => {
  return (
    <Link className={styles.startTracking} href="#">
      Start Tracking
    </Link>
  );
};
