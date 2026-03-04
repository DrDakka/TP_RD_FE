'use client';

import { CloseIcon, SearchIcon } from '@shared/ui';
import cn from 'classnames';
import { useEffect, useRef } from 'react';
import s from './searchDropdown.module.scss';

type Props = {
  open: boolean;
  onClose: () => void;
};

const recent = ['broccoli', 'chicken breast', 'vitamin D'];
const popular = [
  { text: 'high protein foods', cat: 'Products' },
  { text: 'iron rich vegetables', cat: 'Products' },
  { text: 'omega-3 sources', cat: 'Nutrients' },
  { text: 'low glycemic fruits', cat: 'Products' },
];

const SearchDropdown: React.FC<Props> = ({ open, onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && inputRef.current)
      setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose();

    window.addEventListener('keydown', handler);

    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  return (
    <>
      <div
        className={cn(s.backdrop, { [s['backdrop--open']]: open })}
        onClick={onClose}
      />
      <div className={cn(s.panel, { [s['panel--open']]: open })}>
        <div className={s['input-row']}>
          <div className={s['input-icon']}>
            <SearchIcon size={18} />
          </div>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products, nutrients..."
            className={s.input}
            tabIndex={open ? 0 : -1}
          />
          <button
            className={s['close-btn']}
            onClick={onClose}
            aria-label="Close search"
          >
            <CloseIcon size={18} />
          </button>
        </div>
        <div className={s.body}>
          <div className={s.section}>
            <div className={s['section__title']}>Recent</div>
            <div className={s.chips}>
              {recent.map(r => (
                <button key={r} className={s.chip}>
                  {r}
                </button>
              ))}
            </div>
          </div>
          <div className={s.section}>
            <div className={s['section__title']}>Popular searches</div>
            <div className={s['suggestion-list']}>
              {popular.map((p, i) => (
                <button key={i} className={s.suggestion}>
                  <span className={s['suggestion__text']}>{p.text}</span>
                  <span className={s['suggestion__cat']}>{p.cat}</span>
                  <span className={s['suggestion__arrow']}>›</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchDropdown;
