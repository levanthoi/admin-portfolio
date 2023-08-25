import {
  // BrowserRouter,
  LoaderFunction,
  ActionFunction,
  RouterProvider,
  createBrowserRouter,
  // Navigate,
} from 'react-router-dom';
// import ErrorBoundary from '@/components/ErrorBoundary';
// import Error from '@/components/Error';
import { ConfigProvider, theme } from 'antd';
// import ProtectedRoute from './components/protectedRoute';
// import { IRoute } from './types/router.type';
// import routers from './configs/router.config';
// import Login from './pages/login';

interface RouteCommon {
  loader?: LoaderFunction;
  action?: ActionFunction;
  ErrorBoundary?: React.ComponentType<any>;
}

interface IRoute extends RouteCommon {
  path: string;
  Element: React.ComponentType<any>;
}

interface Pages {
  [key: string]: {
    default: React.ComponentType<any>;
  } & RouteCommon;
}

const pages: Pages = import.meta.glob('./pages/**/*.tsx', { eager: true });
console.log('pages', pages);

const routes: IRoute[] = [];
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];

  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes('$')
    ? fileName.replace('$', ':')
    : fileName.replace(/\/index/, '');

  routes.push({
    path: fileName === 'index' ? '/' : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader as LoaderFunction | undefined,
    action: pages[path]?.action as ActionFunction | undefined,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  });
}

// const isAuth = false;

const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: <Element />,
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
  })),
);

function App() {
  const darkMode = false;
  const currentThem = {
    algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary: '#7E22CE',
    },
  };
  return (
    <ConfigProvider theme={currentThem}>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
  // return <RouterProvider router={router} />;
}

export default App;
