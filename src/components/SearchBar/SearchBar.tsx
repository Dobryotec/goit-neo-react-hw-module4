import toast, { Toaster } from 'react-hot-toast';

import { ISearchBarProps } from './SearchBar.types';

import css from './SearchBar.module.css';

const SearchBar: React.FC<ISearchBarProps> = ({ handleQuery }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const query = formData.get('search') as string;

    if (!query.trim()) {
      toast.error('Please enter a valid search query!', {
        position: 'top-right',
        duration: 3000,
      });
      form.reset();
      return;
    }

    handleQuery(query.toLowerCase());
    form.reset();
  };

  return (
    <>
      {' '}
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images"
          name="search"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      <Toaster />
    </>
  );
};

export default SearchBar;
