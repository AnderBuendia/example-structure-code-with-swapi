import { usePeopleService } from '@Services/people.service';
import { useErrorStorage } from '@Services/storage.service';
import { usePeopleStorage } from '@Services/storage.service';

export function useFindPeopleUseCase() {
  const { getPeople } = usePeopleService();
  const { setErrorState } = useErrorStorage();
  const { setPeoplePage } = usePeopleStorage();

  const findPeople = async ({ page }: { page: number }) => {
    try {
      const response = await getPeople({ page });

      setPeoplePage(response);
    } catch (error: any) {
      setErrorState({ hasError: true, message: error.message });
    }
  };

  return { findPeople };
}
