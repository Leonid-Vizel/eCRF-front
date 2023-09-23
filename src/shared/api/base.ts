import axios, { Method, ResponseType } from 'axios';
import Cookies from 'js-cookie';
import { openErrorNotification } from '../lib/notifications/notifications';

export const REACT_APP_ENDPOINT_URL = `${__BASE_URL__}/api/net`;

interface IExternalSystemCallArguments<T> {
  method: Method;
  endpoint: string;
  url?: string;
  data?: T;
  responseType?: ResponseType;
}

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
      headers: {
        'Content-Type': 'application/json',
      },
    });

    client.interceptors.response.use((response) => response, async (error) => {
      if (error.response.status === 401) {
        Cookies.remove('token');
        return Promise.reject(new Error('Срок сессии истек. Авторизуйтесь снова.'));
      }
      return Promise.reject(error);
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
