import { createAsyncThunk } from '@reduxjs/toolkit';
import { getStationaryCardRequest } from 'shared/api/endpoints';
import { GetStationaryCardRequest } from 'shared/api/types';

export const getStationaryCard = createAsyncThunk(
  'stationaryCards/getStationaryCard',
  async (requestData:GetStationaryCardRequest) => {
    const { data } = await getStationaryCardRequest(requestData);
    return data;
  },
);
