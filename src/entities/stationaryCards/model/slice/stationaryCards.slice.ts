import { combineReducers } from 'redux';
import { stationaryCardSlice } from 'features/stationaryCard';
import { stationaryCardsList } from 'features/stationaryCardsList';

export const stationaryCards = combineReducers({
  [stationaryCardSlice.name]: stationaryCardSlice.reducer,
  [stationaryCardsList.name]: stationaryCardsList.reducer,
});
