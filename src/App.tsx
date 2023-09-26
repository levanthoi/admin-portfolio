import {
  LoaderFunction,
  ActionFunction,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { App, ConfigProvider, theme } from 'antd';
import React from 'react';
import MainLayout from './layout/MainLayout';
// import MainLayout from './layout/MainLayout';
// import { getRouterPage } from './utils/helper';
// import Login from './pages/login';

interface RouteCommon {
  loader?: LoaderFunction;
  action?: ActionFunction;
  ErrorBoundary?: React.ComponentType<any>;
}

interface IRoute extends RouteCommon {
  path: string;
  Element: React.ComponentType<any> | any;
  children?: IRoute[];
}

interface Pages {
  [key: string]: {
    default: React.ComponentType<any>;
  } & RouteCommon;
}

const pages: Pages = import.meta.glob('./pages/**/*.tsx', { eager: true });
// console.log('pages', pages);

// const layouts: IRoute[] = [];

const routes: IRoute[] = [
  // {
  //   path: '/login',
  //   Element: Login,
  // },
  // {
  //   path: '/*',
  //   Element: MainLayout,
  //   children: layouts,
  // },
];

for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
  // console.log('aaaa', getRouterPage(path));

  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes('$')
    ? fileName.replace('$', ':')
    : fileName.replace(/\/index/, '');

  // console.log('path', pages[path].default);

  routes.push({
    path: fileName === 'index' ? '/' : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader as LoaderFunction | undefined,
    action: pages[path]?.action as ActionFunction | undefined,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}

// const getRoutes = (routes: IRoute[]): RouteObject[] => {
//   return routes.map(({ Element, ErrorBoundary, ...rest }) => ({
//     ...rest,
//     element: <Element />,
//     ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
//   }));
// };

const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, path, ...rest }) => ({
    ...rest,
    path,
    element:
      path === '/login' ? (
        <Element />
      ) : (
        <MainLayout>
          <Element />
        </MainLayout>
      ),
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
  })),
);

// console.log('router', router);

function NextApp() {
  const darkMode = false;
  const currentThem = {
    algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary: '#7E22CE',
    },
  };
  return (
    <ConfigProvider theme={currentThem}>
      <App>
        <RouterProvider router={router} />
      </App>
    </ConfigProvider>
  );
}

export default NextApp;

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Project from './pages/project';
// import MainLayout from './layout/MainLayout';

// function App() {
//   return (
//     <BrowserRouter>
//       <MainLayout>
//         <Routes>
//           <Route path="/project" element={<Project />}></Route>
//         </Routes>
//       </MainLayout>
//     </BrowserRouter>
//   );
// }

// export default App;
