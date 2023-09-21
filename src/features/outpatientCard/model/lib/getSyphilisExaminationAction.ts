import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSyphilisExaminationRequest } from 'shared/api/endpoints';
import { GetSyphilisExaminationRequest } from 'shared/api/types';

export const getSyphilisExamination = createAsyncThunk(
  'outpatientCards/getSyphilisExamination',
  async (requestData:GetSyphilisExaminationRequest) => {
    const { data } = await getSyphilisExaminationRequest(requestData);

    return data;
  },
);
