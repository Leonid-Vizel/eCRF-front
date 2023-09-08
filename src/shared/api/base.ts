import axios, { Method, ResponseType } from 'axios';
import Cookies from 'js-cookie';
import { openErrorNotification } from '../lib/notifications';
import { REACT_APP_ENDPOINT_URL } from '../constants/constatns';

interface IExternalSystemCallArguments<T> {
  method: Method;
  endpoint: string;
  url?: string;
  data?: T;
  responseType?: ResponseType;
}

// todo удалить после дебага
// export enum URL {
//   BaseURL = '/api',
//   BaseCardUrl = '/api/net',
// }

const headers = {
  authorization: `Bearer ${Cookies.get('token')}`,
  'Content-Type': 'application/json',
};

export async function externalSystemCall<T>({
  method,
  endpoint,
  url = REACT_APP_ENDPOINT_URL,
  data,
  responseType,
}: IExternalSystemCallArguments<T>) {
  try {
    const client = axios.create({
      baseURL: url,
      withCredentials: true,
      headers,
    });

    const response = await client.request({
      url: endpoint,
      method,
      data,
      responseType,
    });
    return response;
  } catch (error) {
    openErrorNotification(error.message);
    return error;
  }
}
