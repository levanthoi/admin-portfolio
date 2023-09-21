import Login from '@/pages/login';
import { RouteObject } from 'react-router-dom';
// import {lazy} from "react"

// const getLazy = (url: string) => lazy(url);

const routers: RouteObject[] = [
  {
    path: '/login',
    Component: Login,
  },
];

export default routers;
