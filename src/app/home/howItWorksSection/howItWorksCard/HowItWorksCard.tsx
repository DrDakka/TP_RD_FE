import styles from './howItWorksCard.module.scss';

type HowItWorksCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export const HowItWorksCard: React.FC<HowItWorksCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <li className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </li>
  );
};
