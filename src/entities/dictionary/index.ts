import { getDictionarySelector, isLoadingSelector } from './model/selectors/dictionarySelectors';
import { dictionarySlice } from './model/slice/dictionary.slice';
import { Dictionary } from './types/types';

export {
  dictionarySlice,
  Dictionary,
  getDictionarySelector,
  isLoadingSelector,
};
