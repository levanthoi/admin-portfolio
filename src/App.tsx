import {
  LoaderFunction,
  ActionFunction,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import MainLayout from './layout/MainLayout';

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

const isAuth = true;

const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: isAuth ? (
      <MainLayout>
        <Element />
      </MainLayout>
    ) : (
      <Element />
    ),
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
}

export default App;

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
