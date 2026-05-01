import styles from './logIn.module.scss';

type LogInProps = {
  logIn: () => void;
};

export const LogIn: React.FC<LogInProps> = ({ logIn }) => {
  return (
    <button
      type="button"
      onClick={logIn}
      className={styles.login}
      data-header-login
    >
      Login
    </button>
  );
};
