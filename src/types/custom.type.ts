import { AxiosResponse } from 'axios';

export interface CustomResponse<T = any> extends AxiosResponse<T> {
  data: T;
  message: string;
  succees: boolean;
}
