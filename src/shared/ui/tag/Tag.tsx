import styles from './tag.module.scss';

type TagProps = {
  title: string;
  color: string;
  size?: 'lg' | 'sm';
  className?: string;
};

/*
  Review: 
    Good component, but all text information should be available for search bots.
    It is better to use <span> for text properties of products
*/

export const Tag: React.FC<TagProps> = ({
  title,
  color,
  size = 'lg',
  className,
}) => {
  const classNames = `${className} ${styles[size]} ${styles.tag}`;

  return (
    <div
      className={classNames}
      style={{
        color: color,
        backgroundColor: color + '33',
      }}
    >
      {title}
    </div>
  );
};
