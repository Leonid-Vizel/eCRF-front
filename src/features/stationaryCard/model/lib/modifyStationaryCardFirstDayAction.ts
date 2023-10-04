import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'app/providers/StoreProvider';
import { modifyStationaryCardFirstDayRequest } from 'shared/api/endpoints';
import { getStationaryCardFormData } from '../selectors/stationaryCardSelectors';

export const modifyStationaryCardFirstDay = createAsyncThunk(
  'stationaryCards/modifyStationaryCardFirstDay',
  async (_, thunkApi) => {
    const formData = getStationaryCardFormData('stationaryCardFirstDayForm')(thunkApi.getState() as RootState);
    const { data } = await modifyStationaryCardFirstDayRequest(formData);

    return data;
  },
);
