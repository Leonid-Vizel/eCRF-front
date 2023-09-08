import { externalSystemCall } from './base';
import { GetUserRequest, LoginRequest } from './types';

export const loginRequest = (data:LoginRequest) => externalSystemCall<LoginRequest>({
  endpoint: 'user/login',
  method: 'POST',
  data,
});

export const getUser = ({ id }:GetUserRequest) => externalSystemCall<GetUserRequest>({
  endpoint: `user/index/${id}`,
  method: 'GET',
});
