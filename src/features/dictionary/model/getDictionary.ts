import { createAsyncThunk } from '@reduxjs/toolkit';
import { getYesNoDictionary } from 'entities/dictionary';
import { getDictionaryRequest } from 'shared/api/endpoints';
import { GetDictionaryRequest } from 'shared/api/types';

export const getDictionary = createAsyncThunk(
  'dictionary/getDictionary',
  async (requestData: GetDictionaryRequest, thunkApi) => {
    const { data } = await getDictionaryRequest(requestData);
    thunkApi.dispatch(getYesNoDictionary());

    return data;
  },
);
