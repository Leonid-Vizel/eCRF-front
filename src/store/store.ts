import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { authReducer } from './authSlice/authSlice';
import { centerReducer } from './centerSlice/centerSlice';
import { protocolReducer } from './protocolSlice/protocolSlice';
import { journalReducer } from './journalSlice/journalSlice';
import { documentReducer } from './documentSlice/documentSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  center: centerReducer,
  protocols: protocolReducer,
  journal: journalReducer,
  document: documentReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
