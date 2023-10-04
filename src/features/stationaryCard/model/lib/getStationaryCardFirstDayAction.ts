import { createAsyncThunk } from '@reduxjs/toolkit';
import { getStationaryCardFirstDayRequest } from 'shared/api/endpoints';
import { GetStationaryCardFirstDayRequest } from 'shared/api/types';

export const getStationaryCardFirstDay = createAsyncThunk(
  'stationaryCards/getStationaryCardFirstDay',
  async (requestData:GetStationaryCardFirstDayRequest) => {
    const { data } = await getStationaryCardFirstDayRequest(requestData);
    return data;
  },
);
