import { useFavorite } from '@/features';
import { IconHeart } from '@/shared';
import styles from './favoriteButton.module.scss';

type FavoriteButtonProps = {
  id: number;
  className?: string;
};

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  id,
  className,
}) => {
  const { isFavorite, toggle } = useFavorite(id);

  return (
    <button
      className={className}
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
        toggle();
      }}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      aria-pressed={isFavorite}
    >
      <IconHeart
        className={`${styles.heart} ${isFavorite && styles.heartActive}`}
      />
    </button>
  );
};
