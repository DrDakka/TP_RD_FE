import { IconApple } from '@/shared';
import styles from './appleLogin.module.scss';

export const AppleLogin = () => {
  return (
    <button type="button" className={styles['apple-button']}>
      <IconApple /> <span>Apple</span>
    </button>
  );
};
