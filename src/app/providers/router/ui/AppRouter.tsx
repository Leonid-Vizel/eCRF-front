import Layout from 'components/layout_overall/Layout';
import { Route, Routes } from 'react-router-dom';
import { baseRoute } from 'shared/config/routerConfig/routerConfig';

export const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      {Object.values(baseRoute).map(({ element, path, children }) => (
        <Route
          key={path}
          element={element}
          path={path}
        // eslint-disable-next-line react/no-children-prop
          children={children}
        />
      ))}
    </Route>
  </Routes>
);
