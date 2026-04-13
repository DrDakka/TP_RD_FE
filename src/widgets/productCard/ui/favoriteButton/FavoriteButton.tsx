import { useFavorite } from '@/features';
import { IconHeart } from '@/shared';
import styles from './favoriteButton.module.scss';

type FavoriteButtonProps = {
  id: number;
  className?: string;
};

/*
  Review:
    Nice isolated component
    One thin moment: you can position element from parent via data-atributes (take a look on header as an example)
    or via pseudoselectors (not a really good solution)
    It will eliminate className prop and the element will be cleaner 
*/

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
