import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'app/providers/StoreProvider';
import { modifyDayRequest } from 'shared/api/endpoints';
import { getOutpatientCardFormData } from '../selectors/outpatientCardSelectors';

export const modifyDay = createAsyncThunk(
  'outpatientCards/modifyDay',
  async (dayNumber:number, thunkApi) => {
    const formData = getOutpatientCardFormData(`dayForm${dayNumber}`)(thunkApi.getState() as RootState);
    const { data } = await modifyDayRequest(formData);

    return data;
  },
);
