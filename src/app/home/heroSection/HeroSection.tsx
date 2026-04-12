import { Content } from './content';
import { NutritionCard } from './nutritionCard';
import styles from './heroSection.module.scss';

export const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <Content />
      <NutritionCard />
    </section>
  );
};
