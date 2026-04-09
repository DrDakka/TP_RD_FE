import { PropTags } from '@/shared/api/types';
import styles from './property.module.scss';
import { getPropTag } from '../../functions';

type PropertyProps = {
  property: PropTags;
};

export const Property: React.FC<PropertyProps> = ({ property }) => {
  const { label, color } = getPropTag(property);

  return (
    <div
      className={styles.property}
      style={{
        color: color,
        backgroundColor: color + '33',
      }}
    >
      {label}
    </div>
  );
};
