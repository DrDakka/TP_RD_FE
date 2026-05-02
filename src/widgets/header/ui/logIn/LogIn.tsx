import { useState } from 'react';
import styles from './logIn.module.scss';
import dynamic from 'next/dynamic';

const Modal = dynamic(
  () => import('@/shared/ui/modal/Modal').then(mod => mod.Modal),
  { ssr: false },
);

type LogInProps = {
  logIn: () => void;
};

export const LogIn: React.FC<LogInProps> = ({ logIn }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className={styles.login}
        data-header-login
      >
        Login
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div>testModal</div>
        <button onClick={logIn}>Log In Button</button>
      </Modal>
    </>
  );
};
