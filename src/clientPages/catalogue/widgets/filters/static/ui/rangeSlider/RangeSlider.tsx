import { DropDown } from '@/shared';
import styles from './rangeSlider.module.scss';
import { useEffect, useState } from 'react';
import { Input } from './input';
import { Slider } from './slider';

type RangeSliderProps = {
  min: number;
  max: number;
  onChange: (value: { min: number; max: number }) => void;
};

export const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  onChange,
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <DropDown label="test">
      {({ className }) => (
        <div className={`${className} ${styles.rangeWrapper}`}>
          <Slider
            min={min}
            max={max}
            minVal={minVal}
            maxVal={maxVal}
            onChangeMinValue={setMinVal}
            onChangeMaxValue={setMaxVal}
          />
          <Input
            value={minVal}
            min={min}
            max={maxVal - 1}
            onChange={setMinVal}
            onError={setError}
          />
          <button
            type="button"
            className={styles.reset}
            onClick={() => {
              setMinVal(min);
              setMaxVal(max);
            }}
          >
            Clear All
          </button>
          <Input
            value={maxVal}
            min={minVal + 1}
            max={max}
            onChange={setMaxVal}
            onError={setError}
            isError={!!error}
          />
          {error && (
            <p className={styles.error}>
              <span>!</span> {error}
            </p>
          )}
        </div>
      )}
    </DropDown>
  );
};
