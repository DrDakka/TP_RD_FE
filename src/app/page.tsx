import c from '@shared/styles/layout/layout.module.scss';
import styles from './styles/page.module.scss';
import { AboutUs, HeroSection, HowItWorksSection, StartTracking } from './home';

export default function Home() {
  return (
    <>
      <StartTracking />
      <div className={`${c.container} ${styles.pageWrapper}`}>
        <HeroSection />
        <HowItWorksSection />
        <AboutUs />
      </div>
    </>
  );
}
