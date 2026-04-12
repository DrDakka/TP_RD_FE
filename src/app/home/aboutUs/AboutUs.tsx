import Link from 'next/link';
import styles from './aboutUs.module.scss';
import Image from 'next/image';

export const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.content}>
        <h2 className={styles.title}>About NutriSpace</h2>
        <p className={styles.description}>
          NutriSpace is your all-in-one solution for tracking nutrition,
          planning balanced meals, and achieving your dietary goals. Discover
          healthy recipes, access a comprehensive food library, and get
          science-backed nutritional insights.
        </p>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src="/about-us.png"
          alt="aboutUs"
          fill
          className={styles.image}
        />
      </div>

      <div className={styles.links}>
        <Link className={styles.link} href="#">
          Learn more about us
        </Link>
        <Link className={styles.link} href="#">
          Food database details
        </Link>
        <Link className={styles.link} href="#">
          Nutrition tips & news
        </Link>
      </div>
    </section>
  );
};
