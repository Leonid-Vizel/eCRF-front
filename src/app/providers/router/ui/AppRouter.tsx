import { MainLayout } from 'pages/Layout';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { baseRoute } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader/index';

export const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      <Route path="/" element={<MainLayout />}>
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
  </Suspense>
);
