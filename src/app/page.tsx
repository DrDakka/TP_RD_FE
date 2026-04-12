import c from '@shared/styles/layout/layout.module.scss';
import styles from './styles/page.module.scss';
import { AboutUs, HeroSection, HowItWorksSection, StartTracking } from './home';

export default function Home() {
  return (
    <div className={`${c.container} ${styles.pageWrapper}`}>
      <StartTracking />
      <HeroSection />
      <HowItWorksSection />
      <AboutUs />
    </div>
  );
}
