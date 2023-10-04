import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'app/providers/StoreProvider';
import { modifyStationaryCardSecondDayRequest } from 'shared/api/endpoints';
import { getStationaryCardFormData } from '../selectors/stationaryCardSelectors';

export const modifyStationaryCardSecondDay = createAsyncThunk(
  'stationaryCards/modifyStationaryCardSecondDay',
  async (_, thunkApi) => {
    const formData = getStationaryCardFormData('stationaryCardSecondDayForm')(thunkApi.getState() as RootState);
    const { data } = await modifyStationaryCardSecondDayRequest(formData);

    return data;
  },
);
