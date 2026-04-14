import { HowItWorksCard } from '../howItWorksCard';
import { data } from './data';
import styles from './howItWorksList.module.scss';

export const HowItWorksList = () => {
  return (
    <ul className={styles.list}>
      {data.map(element => (
        <HowItWorksCard
          key={element.id}
          icon={element.icon}
          title={element.title}
          description={element.description}
        />
      ))}
    </ul>
  );
};
