import {
  Tag,
  TAG_META,
  PROP_TAG_META,
  type Tags,
  type PropTags,
} from '@/shared';
import styles from './pills.module.scss';
import { View } from '../../model';

type PillsProps = {
  tag: Tags;
  propertyTags: PropTags[];
  variant: View;
  className?: string;
};

export const Pills: React.FC<PillsProps> = ({
  tag,
  propertyTags,
  variant,
  className,
}) => {
  const { label, color } = TAG_META[tag];

  return (
    <div className={`${styles.pills} ${styles[variant]} ${className}`}>
      <div>
        <Tag title={label} color={color} />
      </div>

      {propertyTags.map(property => {
        const { label, color } = PROP_TAG_META[property];

        return <Tag key={property} title={label} color={color} size="sm" />;
      })}
    </div>
  );
};
