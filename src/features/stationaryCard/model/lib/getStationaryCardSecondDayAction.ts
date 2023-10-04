import { createAsyncThunk } from '@reduxjs/toolkit';
import { getStationaryCardSecondDayRequest } from 'shared/api/endpoints';
import { GetStationaryCardSecondDayRequest } from 'shared/api/types';

export const getStationaryCardSecondDay = createAsyncThunk(
  'stationaryCards/getStationaryCardSecondDay',
  async (requestData:GetStationaryCardSecondDayRequest) => {
    const { data } = await getStationaryCardSecondDayRequest(requestData);
    return data;
  },
);
