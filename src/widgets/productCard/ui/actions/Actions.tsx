import { useFavorite } from '@/features';
import styles from './actions.module.scss';
import { IconCheck, IconHeart, IconPlus, View } from '@/shared';
import { useState } from 'react';

type ActionsProps = {
  id: number;
  variant: View;
};

export const Actions: React.FC<ActionsProps> = ({ id, variant }) => {
  const { isFavorite, toggle } = useFavorite(id);
  const [isLog, setLog] = useState(false);

  return (
    <div
      className={styles.actions}
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
      }}
      data-actions
    >
      <button
        className={`${styles.log} ${styles[variant]} ${isLog ? styles['log--active'] : ''}`}
        aria-label="Add to Log"
        aria-pressed={isLog}
        onClick={() => setLog(prev => !prev)}
      >
        {isLog ? (
          <>
            <IconCheck /> {variant === 'grid' && 'Added'}
          </>
        ) : (
          <>
            <IconPlus /> {variant === 'grid' && 'Add to Log'}
          </>
        )}
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
