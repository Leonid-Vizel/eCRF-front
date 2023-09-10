import { RootState } from 'store/store';

export const userDataSelector = (state: RootState) => state.user.data;
export const authSelector = (state: RootState) => state.user.data.isAuth;
