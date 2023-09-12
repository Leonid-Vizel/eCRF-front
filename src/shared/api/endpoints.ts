import { externalSystemCall } from './base';
import { GetUserRequest, LoginRequest, GetCardListRequest } from './types';

export const loginRequest = (data:LoginRequest) => externalSystemCall<LoginRequest>({
  endpoint: 'user/login',
  method: 'POST',
  data,
});

export const getUser = ({ id }:GetUserRequest) => externalSystemCall<GetUserRequest>({
  endpoint: `user/index/${id}`,
  method: 'GET',
});

export const getCardList = ({ id, page = 1 }:GetCardListRequest) => externalSystemCall<GetCardListRequest>({
  endpoint: `Card/List/${id}?page=${page}`,
  method: 'GET',
});
