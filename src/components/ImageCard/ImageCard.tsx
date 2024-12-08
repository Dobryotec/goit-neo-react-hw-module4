import { ImageCardProps } from './ImageCard.types';

import css from './ImageCard.module.css';

const ImageCard: React.FC<ImageCardProps> = ({ small, regular }) => {
  return (
    <div className={css['gallery-item']}>
      <img className={css['gallery-image']} src={small} alt={regular} />
    <div className={css["card-shine"]}></div>
      </div>
  );
};

export default ImageCard;
