import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPhysicalExaminationRequest } from 'shared/api/endpoints';
import { GetScreeningRequest } from 'shared/api/types';

export const getPhysicalExamination = createAsyncThunk(
  'outpatientCard/getPhysicalExamination',
  async (requestData: GetScreeningRequest) => {
    const { data } = await getPhysicalExaminationRequest(requestData);

    return data;
  },
);
