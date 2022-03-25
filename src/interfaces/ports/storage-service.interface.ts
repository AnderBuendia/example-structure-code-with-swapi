import type { Dispatch, SetStateAction } from 'react';
import type { ICharacter } from '@Interfaces/domain/character.interface';
import type { IPeoplePage } from '@Interfaces/domain/people-page.interface';
import type { ErrorState } from '@Interfaces/config/errors.interface';

export interface PeopleStorageService {
  numberOfPage: number;
  peoplePage: IPeoplePage;
  characterDetails?: ICharacter;
  setNumberOfPage: Dispatch<SetStateAction<number>>;
  setPeoplePage: Dispatch<SetStateAction<IPeoplePage>>;
  setCharacterDetails: Dispatch<SetStateAction<ICharacter | undefined>>;
}

export interface ErrorStorageService {
  errorState: ErrorState;
  setErrorState: Dispatch<SetStateAction<ErrorState>>;
}
