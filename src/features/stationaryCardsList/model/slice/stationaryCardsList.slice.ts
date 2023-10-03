import { createSlice } from '@reduxjs/toolkit';
import { Status } from 'shared/api';
import dayJS from 'dayjs';
import { StationaryCard } from '../../types/stationaryCardTypes';
import { getStationaryCards } from '../lib/getStationaryCardsAction';

export interface StationaryCardListSlice {
  cardList: StationaryCard[]
  status:Status
}

const initialState: StationaryCardListSlice = {
  cardList: [],
  status: Status.Init,
};

export const stationaryCardsList = createSlice({
  name: 'stationaryCardList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getStationaryCards.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(getStationaryCards.fulfilled, (state, action) => {
        state.status = Status.Success;
        const cards = action.payload.map((card) => ({
          key: card.id,
          birthDate: dayJS(card.birthDate).format('DD/MM/YYY'),
          createDate: dayJS(card.createDate).format('DD/MM/YYY'),
          ...card,
        }));
        state.cardList = cards;
      })
      .addCase(getStationaryCards.rejected, (state) => {
        state.status = Status.Error;
      });
  },
});
