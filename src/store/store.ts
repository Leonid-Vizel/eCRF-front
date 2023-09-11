import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from 'entities/user';
import { authReducer } from './authSlice/authSlice';
import { centerReducer } from './centerSlice/centerSlice';
import { protocolReducer } from './protocolSlice/protocolSlice';
import { journalReducer } from './journalSlice/journalSlice';
import { documentSlice } from 'entities/document/model/slice/document.slice';

const rootReducer = combineReducers({
  auth: authReducer,
  center: centerReducer,
  protocols: protocolReducer,
  journal: journalReducer,
  [documentSlice.name]: documentSlice.reducer,
  [userSlice.name]: userSlice.reducer,
});

// todo протипизировать
const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
