import { RootState } from 'app/providers/StoreProvider';

export const userDataSelector = (state: RootState) => state.user.data;
export const authSelector = (state: RootState) => state.user.data.isAuth;
