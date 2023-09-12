import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from 'widgets/Footer';
import { Navbar } from 'widgets/Navbar/index';

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className="app">
      {pathname !== '/login' && pathname !== '/journal' && <Navbar />}
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
