import { createSlice } from '@reduxjs/toolkit';
import { Status } from 'shared/api';
import { userLogin } from 'features/authentication/login/model/login';
import { RootState } from 'store/store';
import { IUser } from './types';

interface IUserSlice {
  data: IUser;
  status: Status;
}

const initialState: IUserSlice = {
  data: {
    isAuth: false,
  },
  status: Status.Init,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      localStorage.removeItem('token');
    },
    setIsAuth: (state) => {
      state.data.isAuth = true;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(userLogin.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(userLogin.fulfilled, (state) => {
        state.status = Status.Success;
        state.data.isAuth = true;
      })
      .addCase(userLogin.rejected, (state) => {
        state.status = Status.Error;
      });
  },
});

export const userReducer = userSlice.reducer;
export const authSelector = (state:RootState) => state.user.data.isAuth;

export const { logout, setIsAuth } = userSlice.actions;
