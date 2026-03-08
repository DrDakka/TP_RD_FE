import { TestWidget } from '@/widgets/test/Test';
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <TestWidget />
      </main>
    </div>
  );
}
