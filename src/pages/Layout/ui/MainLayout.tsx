import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';
import { Footer } from 'widgets/Footer';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
  className?: string;
}

export const MainLayout:FC<MainLayoutProps> = (props) => {
  const { className } = props;
  return (
    <>
      <Navbar />
      <div className={cls.layoutWrapper}>
        <div className={`${cls.Layout} ${className}`}>
          <Outlet />
        </div>
        <Footer />
      </div>

    </>
  );
};
