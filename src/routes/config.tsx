import { RouteObject } from 'react-router-dom';
import Login from '@/pages/login';
// import MainLayout from '@/layout/MainLayout';
// import Dashboard from '@/pages';
// import Blog from '@/pages/blog';
// import Project from '@/pages/project';

const routers: RouteObject[] = [
  {
    path: 'login',
    element: <Login />,
  },
  // {
  //   path: '/',
  //   element: <MainLayout />,
  //   children: [
  //     {
  //       path: '/',
  //       index: true,
  //       element: <Dashboard />,
  //     },
  //     {
  //       path: '/blog',
  //       element: <Blog />,
  //     },
  //     {
  //       path: '/',
  //       element: <Project />,
  //     },
  //   ],
  // },
  // {
  //   path: '*',
  //   element: <NotFound />
  // }
];

export default routers;
