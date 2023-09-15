import { RootState } from 'app/providers/StoreProvider';
import { DictionaryData } from 'entities/dictionary/types/types';
import { Status } from 'shared/api';

export const isLoadingSelector = (
  dictionaryName: string,
) => (state: RootState) => state.dictionary[dictionaryName]?.status === Status.Loading;

export const getDictionarySelector = (
  dictionaryName: string,
) => (state: RootState): DictionaryData[] => state.dictionary[dictionaryName]?.data;
