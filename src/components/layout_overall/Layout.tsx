import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar/index';

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className="app">
      {pathname !== '/login' && pathname !== '/journal' && <Navbar />}
      <Outlet />
    </div>
  );
};

export default Layout;
