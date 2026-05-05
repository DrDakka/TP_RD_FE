import { api, IconEye, IconEyeOff, IconLock, IconProfile } from '@/shared';
import styles from '../styles/form.module.scss';
import { useRef, useState } from 'react';
import { loginSchema } from '../../module/schema';
import { useUserStore } from '@/features/user/store';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formRef.current) return;

    const form = formRef.current;

    const usernameInput = form.elements.namedItem(
      'username',
    ) as HTMLInputElement;

    const passwordInput = form.elements.namedItem(
      'password',
    ) as HTMLInputElement;

    usernameInput.dataset.error = 'false';
    passwordInput.dataset.error = 'false';

    const values = {
      username: usernameInput.value,
      password: passwordInput.value,
    };

    const result = loginSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      if (fieldErrors.username) {
        usernameInput.dataset.error = 'true';
      }

      if (fieldErrors.password) {
        passwordInput.dataset.error = 'true';
      }

      return;
    }

    setIsLoading(true);

    try {
      await api.auth.login(result.data);

      const user = await api.auth.me();

      useUserStore.getState().setUser(user);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} data-auth-form ref={formRef}>
      <h2 id="login-title">Welcome to Nutrispace 👋</h2>
      <label className={styles.field}>
        <span className={styles['sr-only']}>User name</span>

        <IconProfile />

        <input
          type="text"
          name="username"
          placeholder="Enter your name"
          data-error={false}
        />
      </label>

      <label className={`${styles.field} ${styles.password}`}>
        <span className={styles['sr-only']}>Password</span>

        <IconLock />

        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter password"
          name="password"
          data-error={false}
        />

        <button
          type="button"
          className={styles.eye}
          onClick={() => setShowPassword(prev => !prev)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <IconEyeOff /> : <IconEye />}
        </button>
      </label>

      <button className={styles.submit} type="submit" disabled={isLoading}>
        Login
      </button>
    </form>
  );
};
