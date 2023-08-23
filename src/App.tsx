import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from '@/components/ErrorBoundary';
import Error from '@/components/Error';
import { ConfigProvider, theme } from 'antd';
// import { IRoute } from './types/router.type';
// import routers from './configs/router.config';
import Login from './pages/login';

// const getRoutes = (routers: IRoute[]) => {
//   return routers.map((route: IRoute) => {
//     const { path, component: Component } = route;
//     return <Route path={path} element={<Component />}></Route>;
//   });
// };

function App() {
  const darkMode = true;
  const currentThem = {
    algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary: '#7E22CE',
    },
  };
  return (
    <ErrorBoundary fallback={<Error />}>
      <BrowserRouter>
        <ConfigProvider theme={currentThem}>
          {/* <Routes>{getRoutes(routers)}</Routes> */}
          <Routes>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </ConfigProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
