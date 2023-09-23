import { createAsyncThunk } from '@reduxjs/toolkit';
import { getScreeningRequest } from 'shared/api/endpoints';
import { GetScreeningRequest } from 'shared/api/types';

export const getScreeningVisit = createAsyncThunk(
  'outpatientCard/screening',
  async (requestData: GetScreeningRequest) => {
    const { data } = await getScreeningRequest(requestData);

    return data;
  },
);
