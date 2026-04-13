import { HowItWorksCard } from '../howItWorksCard';
import { data } from './data';
import styles from './howItWorksList.module.scss';

/* 
  Solid piece of code, but
  Index is not a good solution for key:)
*/

export const HowItWorksList = () => {
  return (
    <ul className={styles.list}>
      {data.map((element, index) => (
        <HowItWorksCard
          key={index}
          icon={element.icon}
          title={element.title}
          description={element.description}
        />
      ))}
    </ul>
  );
};
