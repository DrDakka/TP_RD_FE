import { PropTags } from '@/shared/api/types';
import { getPropTag } from '../../functions';
import { Tag } from '@/shared';

type PropertyProps = {
  property: PropTags;
};

export const Property: React.FC<PropertyProps> = ({ property }) => {
  const { label, color } = getPropTag(property);

  return <Tag title={label} color={color} size="sm" />;
};
