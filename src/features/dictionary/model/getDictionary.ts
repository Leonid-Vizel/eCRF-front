import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDictionaryRequest } from 'shared/api/endpoints';
import { GetDictionaryRequest } from 'shared/api/types';

export const getDictionary = createAsyncThunk(
  'dictionary/getDictionary',
  async (requestData: GetDictionaryRequest) => {
    const { data } = await getDictionaryRequest(requestData);

    return data;
  },
);
