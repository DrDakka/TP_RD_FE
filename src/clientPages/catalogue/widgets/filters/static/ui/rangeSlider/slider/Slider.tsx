import styles from './slider.module.scss';

type SliderProps = {
  min: number;
  max: number;
  minVal: number;
  maxVal: number;
  onChangeMinValue: (value: number) => void;
  onChangeMaxValue: (value: number) => void;
};
export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  minVal,
  maxVal,
  onChangeMinValue,
  onChangeMaxValue,
}) => {
  const minPercent = ((minVal - min) / (max - min)) * 100;
  const maxPercent = ((maxVal - min) / (max - min)) * 100;

  return (
    <div className={styles.slider} data-slider>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={event => {
          const value = Math.min(Number(event.target.value), maxVal - 1);

          onChangeMinValue(value);
        }}
        className={`${styles.thumb} ${styles['thumb--left']}`}
        style={{ zIndex: minVal > max / 2 ? 12 : undefined }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={event => {
          const value = Math.max(Number(event.target.value), minVal + 1);

          onChangeMaxValue(value);
        }}
        className={`${styles.thumb} ${styles['thumb--right']}`}
      />

      <div className={styles.track} />
      <div
        className={styles.range}
        style={{
          left: `${minPercent}%`,
          width: `${maxPercent - minPercent}%`,
        }}
      />
    </div>
  );
};
