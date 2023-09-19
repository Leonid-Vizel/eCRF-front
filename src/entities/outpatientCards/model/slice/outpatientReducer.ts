import { combineReducers } from 'redux';
import { outpatientCardSlice } from 'features/outpatientCard';
import { outpatientCardsSlice } from './outpatientCards.slice';

export const outpatientCards = combineReducers({
  [outpatientCardsSlice.name]: outpatientCardsSlice.reducer,
  [outpatientCardSlice.name]: outpatientCardSlice.reducer,
});
