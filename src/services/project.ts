import request from '@/utils/request';

export function getProjects() {
  return request.get(`/v1/projects`);
}
