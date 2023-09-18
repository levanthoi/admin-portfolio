import { IUser } from '@/types/user.type';
import { IAuth } from '@/types/auth.type';
import { CustomResponse } from '@/types/custom.type';
import request from '@/utils/request';

export function login(params: IUser): Promise<CustomResponse<IAuth>> {
  return request.post(`/v1/auth/login`, params);
}
