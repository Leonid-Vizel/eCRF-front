import { createAsyncThunk } from '@reduxjs/toolkit';
import { modifyScreeningVisitRequest } from 'shared/api/endpoints';
import { ModifyScreeningVisitRequest } from 'shared/api/types';

export const modifyScreeningVisit = createAsyncThunk(
  'outpatientCards/modifySyphilisExamination',
  async (formData:ModifyScreeningVisitRequest) => {
    const { data } = await modifyScreeningVisitRequest(formData);

    return data;
  },
);
