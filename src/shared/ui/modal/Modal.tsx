'use client';

import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';
import { IconPlus } from '../icons';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  ariaLabelledBy?: string;
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  ariaLabelledBy,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    modalRef.current?.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  if (typeof document === 'undefined') return null;

  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) return null;

  return createPortal(
    <div
      className={classNames(styles.modal, {
        [styles['modal--open']]: isOpen,
      })}
    >
      <div
        className={`${styles['modal-content']} ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledBy}
        tabIndex={-1}
        ref={modalRef}
      >
        <button
          className={styles.close}
          type="button"
          onClick={onClose}
          aria-label="Close modal"
        >
          <IconPlus cross />
        </button>
        {children}
      </div>
      <div onClick={onClose} className={styles['modal-overlay']}></div>
    </div>,
    modalRoot,
  );
};
