import { createAsyncThunk } from '@reduxjs/toolkit';
import { getLifeAnamnesisRequest } from 'shared/api/endpoints';
import { GetLifeAnamnesisRequest } from 'shared/api/types';

export const getLifeAnamnesis = createAsyncThunk(
  'outpatientCards/getLifeAnamnesis',
  async (requestData:GetLifeAnamnesisRequest) => {
    const { data } = await getLifeAnamnesisRequest(requestData);

    return data;
  },
);
