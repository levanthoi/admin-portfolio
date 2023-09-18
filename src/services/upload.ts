import { CustomResponse } from '@/types/custom.type';
import request from '@/utils/request';

export function deleteFile(id: string | any): Promise<CustomResponse<null>> {
  return request.delete(`/v1/upload/${id}`);
}
