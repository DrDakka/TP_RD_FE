import styles from './icons.module.scss';

type IconProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  viewBox?: string;
};

export const Icon: React.FC<IconProps> = ({
  children,
  className,
  style,
  viewBox = '0 0 24 24',
}) => {
  const iconStyle = `${className} ${styles.icon}`;

  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      className={iconStyle}
      style={style}
    >
      {children}
    </svg>
  );
};
