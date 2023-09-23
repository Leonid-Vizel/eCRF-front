import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { dictionarySlice } from 'entities/dictionary';
import { outpatientCards } from 'entities/outpatientCards';
import { stationaryCards } from 'entities/stationaryCards';
import { userSlice } from 'entities/user';

export function createReduxStore() {
  const rootReducer = combineReducers({
    outpatientCards,
    [userSlice.name]: userSlice.reducer,
    [dictionarySlice.name]: dictionarySlice.reducer,
    stationaryCards,
  });
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
}

const store = createReduxStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
