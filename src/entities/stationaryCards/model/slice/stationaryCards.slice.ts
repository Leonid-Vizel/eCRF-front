import { combineReducers } from 'redux';
import { stationaryCardSlice } from 'features/stationaryCard';
import { stationaryCardsListSlice } from 'features/stationaryCardsList';

export const stationaryCards = combineReducers({
  [stationaryCardSlice.name]: stationaryCardSlice.reducer,
  [stationaryCardsListSlice.name]: stationaryCardsListSlice.reducer,
});
