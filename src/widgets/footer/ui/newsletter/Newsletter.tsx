import s from './newsletter.module.scss';

export const Newsletter = () => (
  <div data-footer-newsletter className={s.container}>
    <span className={s.title}>Stay updated</span>
    <p className={s.subtitle}>Subscribe to our newsletter</p>
    <div className={s.inputRow}>
      <input
        className={s.emailInput}
        type="email"
        placeholder="Enter your email"
        disabled
      />
      <button className={s.subscribeBtn} disabled>
        Subscribe
      </button>
    </div>
  </div>
);
