import styles from './tag.module.scss';

type TagProps = {
  title: string;
  color: string;
  background: string;
  size?: 'lg' | 'sm';
  className?: string;
};

export const Tag: React.FC<TagProps> = ({
  title,
  color,
  background,
  size = 'lg',
  className,
}) => {
  const classNames = `${className} ${styles[size]} ${styles.tag}`;

  return (
    <span
      className={classNames}
      style={
        {
          color: color,
          backgroundColor: background,
          ...(size === 'lg' && {
            border: `1px solid ${color}66`,
            ['--dot-color']: `${color}66`,
          }),
        } as React.CSSProperties
      }
    >
      {title}
    </span>
  );
};
