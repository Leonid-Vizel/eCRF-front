import { createAsyncThunk } from '@reduxjs/toolkit';
import { modifyLifeAnamnesisRequest } from 'shared/api/endpoints';
import { RootState } from 'app/providers/StoreProvider';
import { getOutpatientCardFormData } from '../selectors/outpatientCardSelectors';

export const modifyLifeAnamnesis = createAsyncThunk(
  'outpatientCards/modifyLifeAnamnesis',
  async (_, thunkApi) => {
    const formData = getOutpatientCardFormData('lifeAnamnesisForm')(thunkApi.getState() as RootState);
    const { data } = await modifyLifeAnamnesisRequest(formData);

    return data;
  },
);
