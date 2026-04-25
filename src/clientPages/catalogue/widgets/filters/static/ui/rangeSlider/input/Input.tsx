import { useEffect, useState } from 'react';
import styles from './input.module.scss';

type InputProps = {
  value: number;
  onChange: (value: number) => void;
  onError?: (error: string | null) => void;
  min: number;
  max: number;
};

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  onError,
  min,
  max,
}) => {
  const [inputValue, setInputValue] = useState(String(value));

  useEffect(() => {
    setInputValue(String(value));
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (!/^\d*$/.test(val)) return;

    setInputValue(val);

    if (val === '') {
      onError?.(null);

      return;
    }

    const num = Number(val);

    if (num < min) {
      onError?.(`Min value is ${min}`);

      return;
    }

    if (num > max) {
      onError?.(`Max value is ${max}`);

      return;
    }

    onError?.(null);
    onChange(num);
  };

  const handleBlur = () => {
    if (inputValue === '') {
      setInputValue(String(value));
      onError?.(null);

      return;
    }

    const num = Number(inputValue);

    if (isNaN(num)) {
      setInputValue(String(value));
      onError?.(null);

      return;
    }

    const safe = Math.min(Math.max(num, min), max);

    setInputValue(String(safe));
    onError?.(null);
    onChange(safe);
  };

  return (
    <input
      className={styles.input}
      type="text"
      inputMode="numeric"
      value={inputValue}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};
