import {
  createAdaptedCharacter,
  createAdaptedPeople,
} from '@Services/adapters/peopleAdapter';
import { _handleError, _throwSpecificError } from '@Services/error.service';
import { useCustomFetch } from '@Lib/hooks/useCustomFetch';
import type {
  EndpointPeople,
  EndpointCharacter,
} from '@Interfaces/ports/endpoint-people.interface';

export const SWAPI_URL = 'https://swapi.dev/api/people';

export function usePeopleService() {
  const { customFetch } = useCustomFetch();

  const getPeople = async ({ page }: { page: number }) => {
    try {
      const response = await customFetch(`${SWAPI_URL}/?page=${page}`);

      if (!response.ok) _handleError(response.status);

      const responseToJson: EndpointPeople = await response.json();

      return createAdaptedPeople(responseToJson);
    } catch (error: any) {
      throw _throwSpecificError(error);
    }
  };

  const getCharacter = async ({
    characterId = '1',
  }: {
    characterId: string;
  }) => {
    try {
      const response = await customFetch(`${SWAPI_URL}/${characterId}`);

      if (!response.ok) _handleError(response.status);

      const responseToJson: EndpointCharacter = await response.json();

      return createAdaptedCharacter(responseToJson);
    } catch (error: any) {
      throw _throwSpecificError(error);
    }
  };

  const getSearchCharacter = async ({ urlQuery }: { urlQuery: string }) => {
    try {
      const response = await customFetch(`${SWAPI_URL}/?search=${urlQuery}`);

      if (!response.ok) _handleError(response.status);

      const responseToJson: EndpointPeople = await response.json();

      if (!responseToJson.count)
        throw new Error('This character does not exist');

      return createAdaptedPeople(responseToJson);
    } catch (error: any) {
      throw _throwSpecificError(error);
    }
  };

  return { getPeople, getCharacter, getSearchCharacter };
}
