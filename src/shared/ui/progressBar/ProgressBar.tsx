import styles from './progressBar.module.scss';

type ProgressBarProps = {
  title: string;
  value: number;
  unit?: 'g' | 'kcal';
  color: string;
  goal?: number;
  variant?: 'simple' | 'detailed';
};
export const ProgressBar: React.FC<ProgressBarProps> = ({
  title,
  value,
  unit = 'g',
  color,
  goal = 100,
  variant = 'simple',
}) => {
  const percent = goal ? Math.min((value / goal) * 100, 100) : 100;

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>

      {variant === 'detailed' && goal ? (
        <div className={styles.info}>
          <p>
            <b>{value}</b> / {goal} {unit}
          </p>
          <p className={styles.percent}>{Math.round(percent)}%</p>
        </div>
      ) : (
        <p className={styles.progressValue}>
          {value} {unit}
        </p>
      )}

      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ backgroundColor: color, width: percent + '%' }}
        ></div>
      </div>
    </div>
  );
};
