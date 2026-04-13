import Link from 'next/link';
import styles from './head.module.scss';
import { IconCheck, IconChevron } from '@/shared';

/*
  Review: plz use grid positioning instead of wrappers
  Add ID for h2, use aria-labelledby id on parent section
*/

export const Head = () => {
  return (
    <div className={styles.head}>
      <h2 className={styles.title}>How it works</h2>
      <Link href="#" className={styles.button}>
        <IconCheck className={styles.check} /> Open full guide{' '}
        <IconChevron direction="right" />
      </Link>
    </div>
  );
};
