import { createAsyncThunk } from '@reduxjs/toolkit';
import { editOutpatientCardRequest } from 'shared/api/endpoints';
import { RootState } from 'app/providers/StoreProvider';
import { outpatientCardMainInfo } from '../selectors/outpatientCardSelectors';

export const editOutpatientCard = createAsyncThunk(
  'outpatientCards/editOutpatientCard',
  async (_, thunkApi) => {
    const formData = outpatientCardMainInfo(thunkApi.getState() as RootState);
    const { data } = await editOutpatientCardRequest(formData);

    return data;
  },
);
