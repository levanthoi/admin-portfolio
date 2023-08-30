import axios from 'axios';
import baseUrl from './baseUrl';
import { getItem } from './cookie';
import { notification } from 'antd';

const request = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

request.interceptors.request.use(
  (config) => {
    const cf = config;
    const token = getItem('token');
    if (token) cf.headers.Authorization = `Bearer ${token}`;
    return cf;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (res) => {
    // console.log('res interceptors', res);
    if (res.status === 200) {
      return res.data;
    }
  },
  (error) => {
    console.log(error);
    notification.error({
      message: 'Lỗi',
      description: error?.message || ' Error',
    });
  },
);

export default request;
