import { Tag, TAG_META, Tags } from '@/shared';

type PillsProps = {
  tag: Tags;
  className?: string;
};

export const MainTag: React.FC<PillsProps> = ({ tag, className }) => {
  const { label, color, background } = TAG_META[tag];

  return (
    <Tag
      title={label}
      color={color}
      background={background}
      className={className}
    />
  );
};
