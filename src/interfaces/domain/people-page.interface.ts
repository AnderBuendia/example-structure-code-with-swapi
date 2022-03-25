import type { ICharacter } from '@Interfaces/domain/character.interface';

export interface IPeoplePage {
  people: ICharacter[];
  totalPages: number;
  previousPage: boolean;
  nextPage: boolean;
}
