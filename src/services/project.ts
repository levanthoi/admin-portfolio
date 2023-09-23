import { CustomResponse } from '@/types/custom.type';
import { IParams, IProject } from './../types/project.type';
import request from '@/utils/request';
import { queryString } from '@/utils/queryString';

export function getProjects(): Promise<CustomResponse<IProject[]>> {
  return request.get(`/v1/projects`);
}
export function getProject(id: string | any): Promise<CustomResponse<IProject>> {
  return request.get(`/v1/projects/${id}`);
}
export function getProjectsGithub(params: IParams): Promise<CustomResponse<IProject[]>> {
  return request.get(`/v1/projects/github?${queryString(params)}`);
}
export function addProjects(params: IProject[]): Promise<CustomResponse<IProject[]>> {
  return request.post(`/v1/projects`, params);
}
export function updateProject(id: string | any, parmas: IProject): Promise<CustomResponse<null>> {
  return request.put(`/v1/projects/${id}`, parmas);
}
export function deleteProject(id: string | any): Promise<CustomResponse<null>> {
  return request.delete(`/v1/projects/${id}`);
}
