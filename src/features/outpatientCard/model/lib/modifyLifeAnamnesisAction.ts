import { createAsyncThunk } from '@reduxjs/toolkit';
import { modifyLifeAnamnesisRequest } from 'shared/api/endpoints';
import { ModifyLifeAnamnesisRequest } from 'shared/api/types';

export const modifyLifeAnamnesis = createAsyncThunk(
  'outpatientCards/modifyLifeAnamnesis',
  async (formData:ModifyLifeAnamnesisRequest) => {
    const { data } = await modifyLifeAnamnesisRequest(formData);

    return data;
  },
);
