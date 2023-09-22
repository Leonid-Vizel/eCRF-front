import { createAsyncThunk } from '@reduxjs/toolkit';
import { getOutpatientCardRequest } from 'shared/api/endpoints';
import { GetOutpatientCardRequest } from 'shared/api/types';

export const getOutpatientCard = createAsyncThunk(
  'outpatientCards/getOutpatientCard',
  async (requestData:GetOutpatientCardRequest) => {
    const { data } = await getOutpatientCardRequest(requestData);

    return data;
  },
);
