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
    userName: '',
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
      state.data.userName = action.payload.userName;
      state.data.centerId = action.payload.centerId;
      state.data.role = action.payload.role;
      state.data.roleName = action.payload.roleName;
      state.data.id = action.payload.id;
      state.data.isAuth = true;
    },
    clearUserData: (state) => {
      state.data = { isAuth: false };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(userLogin.pending, (state) => {
        state.status = Status.Loading;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.status = Status.Success;
        const prepareData = {
          ...state.data, ...action.payload, isAuth: true,
        };
        state.data = prepareData;
      })
      .addCase(userLogin.rejected, (state) => {
        state.status = Status.Error;
      });
  },
});

export const userReducer = userSlice.reducer;

export const {
  setIsLogout, setIsAuth, setUserData, clearUserData,
} = userSlice.actions;
