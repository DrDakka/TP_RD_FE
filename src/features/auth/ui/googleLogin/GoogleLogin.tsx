import { IconGoogle } from '@/shared';
import styles from './googleLogin.module.scss';

export const GoogleLogin = () => {
  return (
    <button type="button" className={styles['apple-button']}>
      <IconGoogle /> <span>Google</span>
    </button>
  );
};
