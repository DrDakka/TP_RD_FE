import { Logo } from '@/shared';
import dynamic from 'next/dynamic';
import styles from './authModal.module.scss';
import { LoginForm } from './ui/loginForm';
import { RegisterForm } from './ui/registerForm';
import { useState } from 'react';
import classNames from 'classnames';

const Modal = dynamic(
  () => import('@/shared/ui/modal/Modal').then(mod => mod.Modal),
  { ssr: false },
);

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type AuthMode = 'login' | 'register';

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<AuthMode>('login');

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={styles.modal}>
      <Logo className={styles.logo} />
      <button
        type="button"
        onClick={() => setMode('login')}
        className={classNames(styles.button, {
          [styles['button--active']]: mode === 'login',
        })}
      >
        Login
      </button>

      <button
        type="button"
        onClick={() => setMode('register')}
        className={classNames(styles.button, {
          [styles['button--active']]: mode === 'register',
        })}
      >
        Register
      </button>

      {mode === 'login' ? <LoginForm /> : <RegisterForm />}
    </Modal>
  );
};
