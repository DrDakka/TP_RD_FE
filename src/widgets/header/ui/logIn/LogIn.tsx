import { useState } from 'react';
import styles from './logIn.module.scss';
import { AuthModal } from '@/features/auth';

type LogInProps = {
  logIn: () => void;
};

export const LogIn: React.FC<LogInProps> = ({ logIn }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className={styles.login}
        data-header-login
      >
        Login
      </button>

      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};
