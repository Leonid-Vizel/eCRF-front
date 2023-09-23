import { createAsyncThunk } from '@reduxjs/toolkit';
import { modifyScreeningVisitRequest } from 'shared/api/endpoints';
import { RootState } from 'app/providers/StoreProvider';
import { getOutpatientCardFormData } from '../selectors/outpatientCardSelectors';

export const modifyScreeningVisit = createAsyncThunk(
  'outpatientCards/modifyScreeningVisit',
  async (_, thunkApi) => {
    const formData = getOutpatientCardFormData('screeningVisitSchema')(thunkApi.getState() as RootState);
    const { data } = await modifyScreeningVisitRequest(formData);

    return data;
  },
);
