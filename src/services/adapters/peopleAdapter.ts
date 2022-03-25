import { getFormatPages } from '@Lib/utils/people.utils';
import type {
  EndpointCharacter,
  EndpointPeople,
} from '@Interfaces/ports/endpoint-people.interface';
import { ICharacter } from '@Interfaces/domain/character.interface';

export const createAdaptedCharacter = (resCharacter: EndpointCharacter) => {
  const { birth_year, created, height, name, mass, url } = resCharacter;

  const formattedCharacter: ICharacter = {
    birthYear: birth_year,
    created: Date.parse(created),
    height: Number(height),
    name: name,
    mass: Number(mass),
    url: url,
  };

  return formattedCharacter;
};

export const createAdaptedPeople = (resPeople: EndpointPeople) => {
  return {
    people: resPeople.results.map((character) =>
      createAdaptedCharacter(character)
    ),
    totalPages: getFormatPages(resPeople.count),
    previousPage: Boolean(resPeople.previous),
    nextPage: Boolean(resPeople.next),
  };
};
