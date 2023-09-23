import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'app/providers/StoreProvider';
import { modifyCriteriaRequest } from 'shared/api/endpoints';
import { getOutpatientCardFormData } from '../selectors/outpatientCardSelectors';

export const modifyCriteria = createAsyncThunk(
  'outpatientCards/modifyCriteria',
  async (_, thunkApi) => {
    const formData = getOutpatientCardFormData('criteriaForm')(thunkApi.getState() as RootState);
    const { data } = await modifyCriteriaRequest(formData);

    return data;
  },
);
