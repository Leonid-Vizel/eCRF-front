import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { dictionarySlice } from 'entities/dictionary';
import { documentSlice } from 'entities/document/model/slice/document.slice';
import { userSlice } from 'entities/user';
import { authReducer } from 'store/authSlice/authSlice';
import { centerReducer } from 'store/centerSlice/centerSlice';
import { journalReducer } from 'store/journalSlice/journalSlice';
import { protocolReducer } from 'store/protocolSlice/protocolSlice';

export function createReduxStore() {
  const rootReducer = combineReducers({
    auth: authReducer,
    center: centerReducer,
    protocols: protocolReducer,
    journal: journalReducer,
    [documentSlice.name]: documentSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [dictionarySlice.name]: dictionarySlice.reducer,
  });
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
}

const store = createReduxStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
