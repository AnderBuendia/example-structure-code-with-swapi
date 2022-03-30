import type { FC, ReactNode } from 'react';
import { useState, createContext, useContext } from 'react';
import type { ErrorState } from '@Interfaces/config/errors.interface';
import type { IPeoplePage } from '@Interfaces/domain/people-page.interface';
import type { ICharacter } from '@Interfaces/domain/character.interface';

const DEFAULT_PEOPLE_PAGE = 1;
const DEFAULT_TOTAL_PAGES = 0;

export type AppStoreProviderProps = {
  children: ReactNode;
};

export const AppStoreContext = createContext<any>({});

export const useAppStore = () => useContext(AppStoreContext);

export const getInitialPeoplePage = () => ({
  people: [],
  totalPages: DEFAULT_TOTAL_PAGES,
  previousPage: false,
  nextPage: false,
});

export const AppStoreProvider: FC<AppStoreProviderProps> = ({ children }) => {
  const [numberOfPage, setNumberOfPage] = useState<number>(DEFAULT_PEOPLE_PAGE);
  const [peoplePage, setPeoplePage] = useState<IPeoplePage>(() =>
    getInitialPeoplePage()
  );
  const [characterDetails, setCharacterDetails] = useState<ICharacter>();
  const [errorState, setErrorState] = useState<ErrorState>({ hasError: false });

  const value = {
    numberOfPage,
    peoplePage,
    characterDetails,
    errorState,
    setNumberOfPage,
    setPeoplePage,
    setCharacterDetails,
    setErrorState,
  };

  return (
    <AppStoreContext.Provider value={value}>
      {children}
    </AppStoreContext.Provider>
  );
};
