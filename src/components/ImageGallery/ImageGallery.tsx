import ImageCard from '../ImageCard/ImageCard';

import { IImageGalleryProps } from './ImageGallery.types';

import css from './ImageGallery.module.css';

const ImageGallery: React.FC<IImageGalleryProps> = ({ images, handleCard, openModal, cardRef }) => {
  return (
    <ul className={css['gallery-list']} onClick={() => openModal()}>
      {images.map(({ id, urls: { small, regular } }) => (
        <li ref={cardRef} key={id} onClick={() => handleCard(id)}>
          <ImageCard small={small} regular={regular} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
