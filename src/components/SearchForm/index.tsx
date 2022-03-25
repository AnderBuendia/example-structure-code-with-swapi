import type { FC, KeyboardEvent } from 'react';
import styles from '@Components/SearchForm/SearchForm.module.css';
import { useFindSearchCharacterUseCase } from '@Application/people/find-search-character.use-case';

const KEY_TO_INITIALIZE_SEARCH = 'Enter';

const SearchForm: FC = () => {
  const { findSearchCharacter } = useFindSearchCharacterUseCase();

  const handleSubmit = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== KEY_TO_INITIALIZE_SEARCH) return;

    e.preventDefault();

    const value = (e.target as HTMLInputElement).value;

    await findSearchCharacter({ urlQuery: value });

    (e.target as HTMLInputElement).value = '';
  };

  return (
    <input
      className={styles.searchForm__inputSearch}
      type="text"
      name="search"
      placeholder="You can search your favorite character..."
      onKeyDown={handleSubmit}
      tabIndex={0}
    />
  );
};

export default SearchForm;
