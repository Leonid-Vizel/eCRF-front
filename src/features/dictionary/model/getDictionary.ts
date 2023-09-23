import { createAsyncThunk } from '@reduxjs/toolkit';
import { setLocalDictionary } from 'entities/dictionary';
import { localDictionaries } from 'entities/dictionary/model/slice/dictionary.slice';
import { getDictionaryRequest } from 'shared/api/endpoints';
import { GetDictionaryRequest } from 'shared/api/types';

export const getExternalDictionary = createAsyncThunk(
  'dictionary/getDictionary',
  async (requestData: GetDictionaryRequest) => {
    const { data } = await getDictionaryRequest(requestData);
    return data;
  },
);

export const getDictionary = (dictionaryName) => (dispatch) => {
  if (localDictionaries.includes(dictionaryName)) {
    dispatch(setLocalDictionary(dictionaryName));
  } else {
    dispatch(getExternalDictionary({ dictionaryName }));
  }
};
