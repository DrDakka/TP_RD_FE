import styles from './title.module.scss';

type TitleProps = {
  title: string;
};
export const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h3 className={styles.title} title={title} data-title>
      {title}
    </h3>
  );
};
