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
    <div
      className={styles.wrapper}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={goal}
      aria-label={title}
    >
      <dl>
        <dt className={styles.title}>{title}</dt>

        {variant === 'detailed' && goal ? (
          <dd className={styles.info}>
            <span>
              <b>{value}</b> / {goal} {unit}
            </span>
            <p className={styles.percent}>{Math.round(percent)}%</p>
          </dd>
        ) : (
          <dd className={styles.progressValue}>
            {value} {unit}
          </dd>
        )}
      </dl>

      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ backgroundColor: color, width: percent + '%' }}
        ></div>
      </div>
    </div>
  );
};
