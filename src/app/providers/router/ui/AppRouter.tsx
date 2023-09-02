import Layout from 'components/layout_overall/Layout';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';

export const AppRouter = () => (
  <Routes>
    <Route element={<Layout />} path="/">
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          element={element}
          path={path}
        />
      ))}
    </Route>
  </Routes>
);
