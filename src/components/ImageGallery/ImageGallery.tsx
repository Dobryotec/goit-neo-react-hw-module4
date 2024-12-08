import { useEffect, useRef } from 'react';

import ImageCard from '../ImageCard/ImageCard';

import { IImageGalleryProps } from './ImageGallery.types';

import css from './ImageGallery.module.css';

const ImageGallery: React.FC<IImageGalleryProps> = ({ images, handleCard, openModal }) => {
  const cardRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (cardRef.current && images.length > 12) {
      const screenWidth = window.innerWidth;
      const { height } = cardRef.current.getBoundingClientRect();
      const scrollAmount = screenWidth <= 1229 ? height * 2.5 : height * 3.5;

      window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth',
      });
    }
  }, [images]);

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
