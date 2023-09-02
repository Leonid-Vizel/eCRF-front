import axios from 'axios';
import Cookies from 'js-cookie';

export const BASE_URL = 'https://ecrf.bioequivalencetrials.ru/api';
export const BASE_CARD_URL = 'https://ecrf.bioequivalencetrials.ru/api/net';

export const axiosRequest = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

const headers = {
    authorization: `Bearer ${Cookies.get('token')}`,
    'Content-Type': 'application/json',
};

export const axiosCardRequest = axios.create({
    baseURL: BASE_CARD_URL,
    withCredentials: true,
    headers: headers,
});
