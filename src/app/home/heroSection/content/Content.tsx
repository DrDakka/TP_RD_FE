import Link from 'next/link';
import styles from './content.module.scss';

export const Content = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>Track your daily nutrition smarter</h1>
      <p className={styles.description}>
        Log meals, see detailed nutrition info,and conquer your diet goals with
        ease.
      </p>
      <Link href="#" className={styles.button}>
        How it works
      </Link>
    </div>
  );
};
