import { createAsyncThunk } from '@reduxjs/toolkit';
import { createOutpatientCard } from 'shared/api/endpoints';
import { RootState } from 'app/providers/StoreProvider';
import { outpatientCardMainInfo } from '../selectors/outpatientCardSelectors';

export const createNewOutpatientCard = createAsyncThunk(
  'outpatientCards/outpatientCard',
  async (_, thunkApi) => {
    const formData = outpatientCardMainInfo(thunkApi.getState() as RootState);
    const { data } = await createOutpatientCard(formData);

    return data;
  },
);
