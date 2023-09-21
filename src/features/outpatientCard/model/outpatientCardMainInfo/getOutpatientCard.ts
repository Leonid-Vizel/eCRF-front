import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCardList } from 'shared/api/endpoints';
import { GetCardListRequest } from 'shared/api/types';

export const getOutpatientCards = createAsyncThunk(
  'outpatientCards/outpatientCardslist',
  async (requestData: GetCardListRequest) => {
    const { data } = await getCardList(requestData);

    return data;
  },
);
