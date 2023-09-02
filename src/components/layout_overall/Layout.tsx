import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './navbar/Navbar';

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className="app">
      {pathname !== '/' && pathname !== '/journal' && <Navbar />}
      <Outlet />
    </div>
  );
};

export default Layout;
