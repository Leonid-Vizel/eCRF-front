import axios, { Method, ResponseType } from 'axios';
import Cookies from 'js-cookie';
import { openErrorNotification } from 'shared/lib/notifications';

interface IExternalSystemCallArguments<T> {
  method: Method;
  endpoint: string;
  url: URL;
  data?: T;
  responseType?: ResponseType;
}

export enum URL {
  BaseURL = '/api',
  BaseCardUrl = '/api/net',
}

const headers = {
  authorization: `Bearer ${Cookies.get('token')}`,
  'Content-Type': 'application/json',
};

export async function externalSystemCall<T>({
  method,
  endpoint,
  url,
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
