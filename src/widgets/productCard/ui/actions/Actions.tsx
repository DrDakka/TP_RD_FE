import { useFavorite } from '@/features';
import styles from './actions.module.scss';
import { IconHeart, IconPlus, View } from '@/shared';

type ActionsProps = {
  id: number;
  variant: View;
};

export const Actions: React.FC<ActionsProps> = ({ id, variant }) => {
  const { isFavorite, toggle } = useFavorite(id);

  return (
    <div
      className={styles.actions}
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
      }}
      data-actions
    >
      <button className={`${styles.log} ${styles[variant]}`}>
        <IconPlus /> {variant === 'grid' && 'Add to Log'}
      </button>
      <button
        onClick={() => {
          toggle();
        }}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        aria-pressed={isFavorite}
      >
        <IconHeart
          className={`${styles.heart} ${isFavorite && styles['heart--active']}`}
        />
      </button>
    </div>
  );
};
