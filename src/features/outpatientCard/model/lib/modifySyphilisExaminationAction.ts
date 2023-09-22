import { createAsyncThunk } from '@reduxjs/toolkit';
import { modifySyphilisExaminationRequest } from 'shared/api/endpoints';
import { RootState } from 'app/providers/StoreProvider';
import { getOutpatientCardFormData } from '../selectors/outpatientCardSelectors';

export const modifySyphilisExamination = createAsyncThunk(
  'outpatientCards/modifySyphilisExamination',
  async (_, thunkApi) => {
    const formData = getOutpatientCardFormData('syphilisExaminationForm')(thunkApi.getState() as RootState);
    const { data } = await modifySyphilisExaminationRequest(formData);

    return data;
  },
);
