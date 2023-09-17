import { createSlice } from '@reduxjs/toolkit';
import { getOutpatientCards } from 'features/outpatientCardsList/model/getOutpatientCards';
import { Status } from 'shared/api';
import { ICard } from '../../types/types';

export interface IOutpatientCardsSlice {
  outpatientCards:{
    cards: ICard[],
    total: number,
    totalPages:number,
    pageSize: number,
    currentPage:number,
  },
  status:Status
}

const initialState: IOutpatientCardsSlice = {
  outpatientCards: null,
  status: Status.Init,
};

export const outpatientCardsSlice = createSlice({
  name: 'outpatientCards',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getOutpatientCards.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(getOutpatientCards.fulfilled, (state, action) => {
        state.status = Status.Success;
        const cards = action.payload.cards.map((card) => ({ key: card.id, ...card }));
        state.outpatientCards = action.payload;
        state.outpatientCards.cards = cards;
      })
      .addCase(getOutpatientCards.rejected, (state) => {
        state.status = Status.Error;
      });
  },
});
