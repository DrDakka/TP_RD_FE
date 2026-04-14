import Link from 'next/link';
import { HowItWorksList } from './howItWorksList';
import { IconCheck, IconChevron } from '@/shared';
import styles from './howItWorksSection.module.scss';

export const HowItWorksSection = () => {
  return (
    <section className={styles.howItWorks}>
      <h2 className={styles.title}>How it works</h2>
      <Link href="#" className={styles.button}>
        <IconCheck className={styles.check} /> Open full guide{' '}
        <IconChevron direction="right" />
      </Link>

      <HowItWorksList />
    </section>
  );
};
