import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCardList, getStationaryCardList } from 'shared/api/endpoints';
import { GetCardListRequest } from 'shared/api/types';

export enum CardsList {
  OUTPATIENT_CARDS_LIST = 'OUTPATIENT_CARDS_LIST',
  STATIONARY_CARDS_LIST = 'STATIONARY_CARDS_LIST',
}

export const getOutpatientCards = createAsyncThunk(
  'outpatientCards/getOutpatientCards',
  async (requestData: GetCardListRequest) => {
    const { data } = await getCardList(requestData);

    return data;
  },
);
export const getStationaryCards = createAsyncThunk(
  'stationaryCards/getStationaryCards',
  async (requestData: GetCardListRequest) => {
    const { data } = await getStationaryCardList(requestData);

    return data;
  },
);

export const getCardsList = ({ entity, id }: { entity: CardsList, id: string }) => (dispatch) => {
  switch (entity) {
    case CardsList.OUTPATIENT_CARDS_LIST:
      return dispatch(getOutpatientCards({ id }));

    case CardsList.STATIONARY_CARDS_LIST:
      return dispatch(getStationaryCards({ id }));

    default:
      return null;
  }
};
