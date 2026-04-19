import { Tag, PROP_TAG_META, type PropTags } from '@/shared';
import styles from './pills.module.scss';

type PillsProps = {
  propertyTags: PropTags[];
};

export const Pills: React.FC<PillsProps> = ({ propertyTags }) => {
  const visibleTags = propertyTags.slice(0, 2);
  const hiddenCount = propertyTags.length - visibleTags.length;

  return (
    <div className={styles.pills} data-pills>
      {visibleTags.map(property => {
        const { label, color, background } = PROP_TAG_META[property];

        return (
          <Tag
            key={property}
            title={label}
            color={color}
            background={background}
            size="sm"
          />
        );
      })}
      {hiddenCount > 0 && (
        <span className={styles.counter}>+{hiddenCount}</span>
      )}
    </div>
  );
};
