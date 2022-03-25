import { usePeopleService } from '@Services/people.service';
import { useErrorStorage } from '@Services/storage.service';
import { usePeopleStorage } from '@Services/storage.service';

export function useFindSearchCharacterUseCase() {
  const { getSearchCharacter } = usePeopleService();
  const { setErrorState } = useErrorStorage();
  const { setPeoplePage } = usePeopleStorage();

  const findSearchCharacter = async ({ urlQuery }: { urlQuery: string }) => {
    try {
      const response = await getSearchCharacter({ urlQuery });

      setPeoplePage(response);
    } catch (error: any) {
      setErrorState({ hasError: true, message: error.message });
    }
  };

  return { findSearchCharacter };
}
