import { IconEye, IconEyeOff, IconLetter, IconLock } from '@/shared';
import styles from '../styles/form.module.scss';
import { useRef, useState } from 'react';
import { loginSchema } from '../../module/schema';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!formRef.current) return;

    const form = formRef.current;

    const emailInput = form.elements.namedItem('email') as HTMLInputElement;

    const passwordInput = form.elements.namedItem(
      'password',
    ) as HTMLInputElement;

    emailInput.dataset.error = 'false';
    passwordInput.dataset.error = 'false';

    const values = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    const result = loginSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;

      if (fieldErrors.email) {
        emailInput.dataset.error = 'true';
      }

      if (fieldErrors.password) {
        passwordInput.dataset.error = 'true';
      }

      return;
    }

    console.log(result.data);
  };

  return (
    <form onSubmit={handleSubmit} data-auth-form ref={formRef}>
      <h2 id="login-title">Welcome to Nutrispace 👋</h2>
      <label className={styles.field}>
        <span className={styles['sr-only']}>Email</span>

        <IconLetter />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
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
          {showPassword ? <IconEyeOff /> : <IconEye /> }
        </button>
      </label>

      <button className={styles.submit} type="submit">
        Login
      </button>
    </form>
  );
};
