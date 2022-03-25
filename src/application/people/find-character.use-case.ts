import { usePeopleService } from '@Services/people.service';
import { useErrorStorage } from '@Services/storage.service';
import { usePeopleStorage } from '@Services/storage.service';

export function useFindCharacterUseCase() {
  const { getCharacter } = usePeopleService();
  const { setErrorState } = useErrorStorage();
  const { setCharacterDetails } = usePeopleStorage();

  const findCharacter = async ({ characterId }: { characterId: string }) => {
    try {
      const response = await getCharacter({ characterId });

      setCharacterDetails(response);
    } catch (error: any) {
      setErrorState({ hasError: true, message: error.message });
    }
  };

  return { findCharacter };
}
