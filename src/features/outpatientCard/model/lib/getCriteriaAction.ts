import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCriteriaRequest } from 'shared/api/endpoints';
import { GetCriteriaRequest } from 'shared/api/types';

export const getCriteria = createAsyncThunk(
  'outpatientCards/getCriteria',
  async (requestData:GetCriteriaRequest) => {
    const { data } = await getCriteriaRequest(requestData);

    return data;
  },
);
