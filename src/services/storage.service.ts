import { useAppStore } from '@Lib/context/app-store.context';
import type { PeopleStorageService } from '@Interfaces/ports/storage-service.interface';
import type { ErrorStorageService } from '@Interfaces/ports/storage-service.interface';

export const usePeopleStorage = (): PeopleStorageService => {
  return useAppStore();
};

export const useErrorStorage = (): ErrorStorageService => {
  return useAppStore();
};
