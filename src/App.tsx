import { useEffect, useRef, useState } from 'react';
import { getAllimages } from './api/images';

import Container from './components/Container/Container';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Spinner from './components/Spinner/Spinner';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import NoResults from './components/NoResults/NoResults';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

import { IImage } from './components/ImageGallery/ImageGallery.types';

import css from './App.module.css';

function App() {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<IImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [activeCard, setActiveCard] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const cardRef = useRef<HTMLLIElement>(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveCard('');
  };

  const handleQuery = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
  };

  const handleCard = (newId: string) => {
    const activeCard = images.find(({ id }) => id === newId);

    if (activeCard) {
      const {
        urls: { regular },
      } = activeCard;
      setActiveCard(regular);
    }
  };

  const handleNextPage = async () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchImages = async () => {
      if (!query) return;
      try {
        setIsLoading(true);
        setError(false);
        const {
          data: { results, total_pages },
        } = await getAllimages(query, page);

        if (page === 1) {
          setImages(results);
          setTotalPages(total_pages);
        } else {
          setImages(prevImages => [...prevImages, ...results]);
        }
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
 
  }, [query, page]);

  return (
    <>
      <header className={css.header}>
        <SearchBar handleQuery={handleQuery} />
      </header>
      <main className={css.main}>
        <Container>
          {images.length > 0 && (
            <ImageGallery
              cardRef={cardRef}
              images={images}
              handleCard={handleCard}
              openModal={openModal}
            />
          )}
          {images.length === 0 && query && !error && !isLoading && <NoResults />}
          {isLoading && !error && <Spinner />}
          {error && !isLoading && <ErrorMessage />}
          {totalPages > page && query && !error && !isLoading && (
            <LoadMoreBtn handleNextPage={handleNextPage} />
          )}
        </Container>
        {activeCard && (
          <ImageModal activeCard={activeCard} closeModal={closeModal} modalIsOpen={modalIsOpen} />
        )}
      </main>
    </>
  );
}

export default App;
