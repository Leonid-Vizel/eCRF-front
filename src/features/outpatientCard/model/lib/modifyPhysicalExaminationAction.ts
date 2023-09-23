import { createAsyncThunk } from '@reduxjs/toolkit';
import { modifyPhysicalExaminationRequest } from 'shared/api/endpoints';
import { RootState } from 'app/providers/StoreProvider';
import { getOutpatientCardFormData } from '../selectors/outpatientCardSelectors';

export const modifyPhysicalExamination = createAsyncThunk(
  'outpatientCards/modifyPhysicalExamination',
  async (_, thunkApi) => {
    const formData = getOutpatientCardFormData('physicalExaminationForm')(thunkApi.getState() as RootState);
    const { data } = await modifyPhysicalExaminationRequest(formData);

    return data;
  },
);
