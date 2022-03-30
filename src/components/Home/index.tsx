import type { FC } from 'react';
import { useState, useEffect, useCallback } from 'react';
import styles from '@Components/Home/Home.module.css';
import { useFindPeopleUseCase } from '@Application/people/find-people.use-case';
import { useFindCharacterUseCase } from '@Application/people/find-character.use-case';
import { getCharacterIdFromApiUrl } from '@Lib/utils/people.utils';
import { usePeopleStorage } from '@Services/storage.service';
import { useErrorStorage } from '@Services/storage.service';
import CharacterDetails from '@Components/CharacterDetails';
import SearchForm from '@Components/SearchForm';
import Pagination from '@Components/Home/Pagination';
import Divider from '@Components/generic/Divider';
import Spinner from '@Components/generic/Spinner';
// import fakeApi from '@Lib/utils/fakeApi.json';

const Home: FC = () => {
  const [characterId, setCharacterId] = useState<string | undefined>();
  const { errorState } = useErrorStorage();
  const { numberOfPage, peoplePage, setNumberOfPage, characterDetails } =
    usePeopleStorage();
  const { findCharacter } = useFindCharacterUseCase();
  const { findPeople } = useFindPeopleUseCase();

  useEffect(() => {
    fetchPeople(numberOfPage);
  }, [numberOfPage]);

  useEffect(() => {
    if (characterId) fetchCharacter(characterId);
  }, [characterId]);

  const fetchPeople = useCallback(
    async (page: number) => {
      await findPeople({ page });
    },
    [numberOfPage]
  );

  const fetchCharacter = useCallback(
    async (characterId: string) => {
      await findCharacter({ characterId });
    },
    [characterId]
  );

  const showCharacterDetails = (url: string) => {
    const characterUrlId = getCharacterIdFromApiUrl(url);

    if (characterUrlId) setCharacterId(characterUrlId);
  };

  const renderPeople = peoplePage.people.length ? (
    <>
      <ul className={styles.home__swapiList}>
        {peoplePage?.people.map((character) => {
          return (
            <li
              className={`${styles.home__swapiCharacter} ${
                character.name === characterDetails?.name &&
                styles.home__swapiCharacter_focus
              }`}
              key={character.name}
              onClick={() => showCharacterDetails(character.url)}
            >
              {character.name}
            </li>
          );
        })}
      </ul>

      <Pagination
        peoplePage={peoplePage}
        numberOfPage={numberOfPage}
        handleNumberOfPage={setNumberOfPage}
      />
    </>
  ) : (
    <>
      <p>Loading results...</p>
      <Spinner />
    </>
  );

  return (
    <div className={styles.home__container}>
      <h1 className="h1">SWAPI LIST CHARACTERS</h1>
      {errorState.hasError && (
        <div className={styles.home__error}>
          <p>{errorState.message}</p>
        </div>
      )}

      <SearchForm />

      <h3 className="h3">CHARACTERS</h3>
      {renderPeople}

      <Divider />

      {characterDetails ? (
        <CharacterDetails details={characterDetails} />
      ) : (
        <h5>Choose a character from the list</h5>
      )}
    </div>
  );
};

export default Home;
