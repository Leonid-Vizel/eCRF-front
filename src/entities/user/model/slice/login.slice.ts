import { createSlice } from '@reduxjs/toolkit';
import { Status } from 'shared/api';
import { userLogin } from 'features/authentication/login/model/login';
import { IUser } from '../../types/types';

interface IUserSlice {
  data: IUser;
  status: Status;
}

const initialState: IUserSlice = {
  data: {
    isAuth: false,
    fullName: '',
  },
  status: Status.Init,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLogout: (state) => {
      state.data = null;
    },
    setIsAuth: (state) => {
      state.data.isAuth = true;
    },
    setUserData: (state, action) => {
      state.data.fullName = action.payload.userName;
      state.data.center = action.payload.userCenter;
      state.data.role = action.payload.userRole;
      state.data.id = action.payload.userId;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(userLogin.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = Status.Success;
        state.data.isAuth = true;
        state.data.fullName = action.payload.name;
      })
      .addCase(userLogin.rejected, (state) => {
        state.status = Status.Error;
      });
  },
});

export const userReducer = userSlice.reducer;

export const { setIsLogout, setIsAuth, setUserData } = userSlice.actions;
