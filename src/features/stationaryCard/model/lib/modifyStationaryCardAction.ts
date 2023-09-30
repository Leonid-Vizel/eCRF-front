import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'app/providers/StoreProvider';
import { modifyStationaryCardRequest } from 'shared/api/endpoints';
import { getStationaryCardFormData } from '../selectors/stationaryCardSelectors';

export const modifyStationaryCard = createAsyncThunk(
  'stationaryCards/modifyStationaryCard',
  async (_, thunkApi) => {
    const formData = getStationaryCardFormData('stationaryMainInfoForm')(thunkApi.getState() as RootState);
    const { data } = await modifyStationaryCardRequest(formData);

    return data;
  },
);
