import { RootState } from '../store';

export const authSelector = (state: RootState) => state.auth;

export const isAuthSelector = (state: RootState) => !!state.auth.data;
