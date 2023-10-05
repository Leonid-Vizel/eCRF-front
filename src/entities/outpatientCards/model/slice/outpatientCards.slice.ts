import { createSlice } from '@reduxjs/toolkit';
import { getOutpatientCards } from 'features/outpatientCardsList/model/lib/getCardsList';
import { Status } from 'shared/api';
import { ICard } from '../../types/types';

export interface IOutpatientCardsSlice {
  cardslist: ICard[]
  status:Status
}
// todo вынести в features

const initialState: IOutpatientCardsSlice = {
  cardslist: [],
  status: Status.Init,
};

export const outpatientCardsSlice = createSlice({
  name: 'outpatientCardslist',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getOutpatientCards.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(getOutpatientCards.fulfilled, (state, action) => {
        state.status = Status.Success;
        const cards = action.payload.map((card) => ({ key: card.id, ...card }));
        state.cardslist = action.payload;
        state.cardslist = cards;
      })
      .addCase(getOutpatientCards.rejected, (state) => {
        state.status = Status.Error;
      });
  },
});
