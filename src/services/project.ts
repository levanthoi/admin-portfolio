import { CustomResponse } from '@/types/custom.type';
import { IParams, IProject } from './../types/project.type';
import request from '@/utils/request';
import { queryString } from '@/utils/queryString';

export function getProjects(): Promise<CustomResponse<IProject[]>> {
  return request.get(`/v1/projects`);
}
export function getProjectsGithub(params: IParams): Promise<CustomResponse<IProject[]>> {
  return request.get(`/v1/projects/github?${queryString(params)}`);
}
