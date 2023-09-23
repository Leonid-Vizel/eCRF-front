import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDayRequest } from 'shared/api/endpoints';
import { GetDayRequest } from 'shared/api/types';

export const getDay = createAsyncThunk(
  'outpatientCards/getDay',
  async (requestData:GetDayRequest) => {
    const { data } = await getDayRequest(requestData);

    return data;
  },
);
