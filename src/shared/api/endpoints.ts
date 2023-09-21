import { OutpatientMainInfoForm } from 'features/outpatientCard';
import { externalSystemCall } from './base';
import {
  GetUserRequest,
  LoginRequest,
  GetCardListRequest,
  GetDictionaryRequest,
  GetScreeningRequest,
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

export const createOutpatientCard = (mainIfoData: OutpatientMainInfoForm) => {
  console.log(mainIfoData);

  return externalSystemCall<OutpatientMainInfoForm>({
    endpoint: 'Card/Create',
    method: 'POST',
    data: mainIfoData,
  });
};

export const getDictionaryRequest = ({
  dictionaryName,
}: GetDictionaryRequest) => externalSystemCall<GetDictionaryRequest>({
  endpoint: `Enum/${dictionaryName}`,
  method: 'GET',
});

export const getScreeningRequest = ({ cardId }:GetScreeningRequest) => externalSystemCall<GetScreeningRequest>({
  endpoint: `Screening/Modify/${cardId}`,
  method: 'GET',
});
