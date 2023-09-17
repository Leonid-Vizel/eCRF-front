import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { dictionarySlice } from 'entities/dictionary';
import { outpatientCardsSlice } from 'entities/outpatientCards';
import { userSlice } from 'entities/user';
import { outpatientCardSlice } from 'features/outpatientCard';

export function createReduxStore() {
  const rootReducer = combineReducers({
    [outpatientCardsSlice.name]: outpatientCardsSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [dictionarySlice.name]: dictionarySlice.reducer,
    [outpatientCardSlice.name]: outpatientCardSlice.reducer,
  });
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
}

const store = createReduxStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
