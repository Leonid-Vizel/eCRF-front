import { createAsyncThunk } from '@reduxjs/toolkit';
import { modifySyphilisExaminationRequest } from 'shared/api/endpoints';
import { ModifySyphilisExaminationRequest } from 'shared/api/types';

export const modifySyphilisExamination = createAsyncThunk(
  'outpatientCards/syphilisExamination',
  async (formData:ModifySyphilisExaminationRequest) => {
    const { data } = await modifySyphilisExaminationRequest(formData);

    return data;
  },
);
