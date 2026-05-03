import {
  IconCheck,
  IconEye,
  IconEyeOff,
  IconLetter,
  IconLock,
  IconProfile,
} from '@/shared';
import styles from '../styles/form.module.scss';
import { useRef, useState } from 'react';
import { registerSchema } from '../../module/schema';

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!formRef.current) return;

    const form = formRef.current;

    const usernameInput = form.elements.namedItem(
      'username',
    ) as HTMLInputElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const passwordInput = form.elements.namedItem(
      'password',
    ) as HTMLInputElement;
    const passwordConfirmInput = form.elements.namedItem(
      'password_confirm',
    ) as HTMLInputElement;
    const termsInput = form.elements.namedItem('terms') as HTMLInputElement;

    usernameInput.dataset.error = 'false';
    emailInput.dataset.error = 'false';
    passwordInput.dataset.error = 'false';
    passwordConfirmInput.dataset.error = 'false';
    termsInput.dataset.error = 'false';

    const values = {
      username: usernameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      password_confirm: passwordConfirmInput.value,
      terms: termsInput.checked,
    };

    const result = registerSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      console.log(fieldErrors)

      if (fieldErrors.username) {
        usernameInput.dataset.error = 'true';
      }

      if (fieldErrors.email) {
        emailInput.dataset.error = 'true';
      }

      if (fieldErrors.password) {
        passwordInput.dataset.error = 'true';
      }

      if (fieldErrors.password_confirm) {
        passwordConfirmInput.dataset.error = 'true';
      }

      if (fieldErrors.terms) {
        termsInput.dataset.error = 'true';
      }

      return;
    }

    console.log(result.data);
  };

  return (
    <form onSubmit={handleSubmit} data-auth-form ref={formRef}>
      <h2>Create your account</h2>
      <label className={styles.field}>
        <span className={styles['sr-only']}>Full Name</span>

        <IconProfile />

        <input
          type="text"
          name="username"
          placeholder="Full Name"
          data-error={false}
        />
      </label>

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
          {showPassword ? <IconEyeOff /> : <IconEye />}
        </button>
      </label>

      <label className={`${styles.field} ${styles.password}`}>
        <span className={styles['sr-only']}>Password</span>

        <IconLock />

        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Confirm Password"
          name="password_confirm"
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

      <label className={styles.checkbox}>
        <input type="checkbox" data-error={false} name="terms" />
        <span className={styles.checkmark}>
          <IconCheck />
        </span>

        <span>
          I agree to the <a href="#">Terms of Use</a> and
          <a href="#"> Privacy Policy</a>.
        </span>
      </label>

      <button className={styles.submit} type="submit">
        Create Account
      </button>
    </form>
  );
};
