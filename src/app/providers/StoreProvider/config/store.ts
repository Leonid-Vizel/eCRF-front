import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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
  const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false,
  });
  const store = configureStore({
    reducer: rootReducer,
    middleware: customizedMiddleware,
  });
  return store;
}

const store = createReduxStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
