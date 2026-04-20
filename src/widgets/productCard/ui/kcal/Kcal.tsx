import styles from './kcal.module.scss';

type KcalProps = {
  cal: number;
};

export const Kcal: React.FC<KcalProps> = ({ cal }) => {
  return (
    <dl className={styles.kcal} data-kcal>
      <dt>{cal} kcal</dt> / <dd>100g</dd>
    </dl>
  );
};
