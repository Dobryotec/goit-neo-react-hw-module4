import { ILoadMoreBtnProps } from './LoadMore.types';

import css from './LoadMoreBtn.module.css';

const LoadMoreBtn: React.FC<ILoadMoreBtnProps> = ({ handleNextPage }) => {
  return (
    <button className={css.button} type="submit" onClick={handleNextPage}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
