import Link from 'next/link';
import styles from './startTracking.module.scss';

/*
  Review:
    nice element, proper use of mixins
    Only thing - this button must not enter footer zone 
*/

export const StartTracking = () => {
  return (
    <Link className={styles.startTracking} href="#">
      Start Tracking
    </Link>
  );
};
