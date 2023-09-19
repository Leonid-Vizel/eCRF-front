import { externalSystemCall } from './base';
import {
  GetUserRequest,
  LoginRequest,
  GetCardListRequest,
  GetDictionaryRequest,
} from './types';

export const loginRequest = (data: LoginRequest) => externalSystemCall<LoginRequest>({
  endpoint: 'user/login',
  method: 'POST',
  data,
});

export const getUser = ({ id }: GetUserRequest) => externalSystemCall<GetUserRequest>({
  endpoint: `user/index/${id}`,
  method: 'GET',
});

export const getCardList = ({ id }: GetCardListRequest) => externalSystemCall<GetCardListRequest>({
  endpoint: `Card/List/${id}`,
  method: 'GET',
});

// export const getCard = ({ id }: GetCardListRequest) => externalSystemCall<GetCardListRequest>({
//   endpoint: `Card/List/${id}`,
//   method: 'GET',
// });

export const createOutpatientCard = ({ id }: any) => externalSystemCall<any>({
  endpoint: 'Card/Create',
  method: 'POST',
  data: { id },
});

export const getDictionaryRequest = ({
  dictionaryName,
}: GetDictionaryRequest) => externalSystemCall<GetDictionaryRequest>({
  endpoint: `Enum/${dictionaryName}`,
  method: 'GET',
});
