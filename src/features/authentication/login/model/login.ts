import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginRequest } from 'shared/api/endpoints';
import { LoginRequest } from 'shared/api/types';
import { openErrorNotification } from 'shared/lib/notifications/notifications';
import { setUserData } from 'entities/user/model/slice/user.slice';
import { TokenPayload } from './types';

export const userLogin = createAsyncThunk(
  'user/login',
  async (requestData: LoginRequest, thunkApi) => {
    const { data } = await loginRequest(requestData);

    if (data.Password) {
      openErrorNotification(data.Password);
      throw new Error(data.Password);
    }

    const decodedToken = jwt_decode<TokenPayload>(data);
    const {
      name: userName, id, centerId, role, roleName,
    } = decodedToken;

    Cookies.set('token', data);
    Cookies.set('token_name', userName);
    Cookies.set('token_id', id.toString());
    Cookies.set('token_centerId', centerId.toString());
    Cookies.set('token_role', role.toString());
    Cookies.set('token_rolename', roleName);

    thunkApi.dispatch(setUserData({
      userName,
      id,
      centerId,
      role,
      roleName,
    }));
    return decodedToken;
  },
);
