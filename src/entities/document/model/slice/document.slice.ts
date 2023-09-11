import { createSlice } from '@reduxjs/toolkit';
import { ICard } from 'entities/document/types/types';
import { getOutpatientCards } from 'features/outpatientCardsList/model/getOutpatientCards';
import { Status } from 'shared/api';

export interface IDocumentSlice {
  outpatientCards:{
    cards:ICard[],
    total: number,
    totalPages:number,
    pageSize: number,
    currentPage:number,
  },
  status:Status
}

const initialState:IDocumentSlice = {
  outpatientCards: null,
  status: Status.Init,
};

export const documentSlice = createSlice({
  name: 'document',
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
