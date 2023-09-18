import Cookies from 'js-cookie';

const getCookie = Cookies.get(import.meta.env.VITE_NAMESPACE)
  ? JSON.parse(Cookies.get(import.meta.env.VITE_NAMESPACE) || '')
  : {};

const getItem = (key: string) => {
  return getCookie[key];
};

const setCookie = (value: any) => {
  Cookies.set(import.meta.env.VITE_NAMESPACE, JSON.stringify(value));
};

export { getCookie, getItem, setCookie };
