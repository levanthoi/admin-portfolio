import { lazy } from 'react';

const getLazyLoad = (url: string) => lazy(() => import(`../pages/${url}/index.tsx`));
const routers = [
  {
    path: '/login',
    component: getLazyLoad('login'),
    children: [],
  },
];

export default routers;
