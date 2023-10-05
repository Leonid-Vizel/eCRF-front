import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';
import { Footer } from 'widgets/Footer';
import { GoBackButton } from 'widgets/GoBackButton/ui/GoBackButton';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
  className?: string;
}

export const MainLayout:FC<MainLayoutProps> = (props) => {
  const { className } = props;
  return (
    <>
      <Navbar />
      <GoBackButton classNames={cls.goBackButton} />
      <div className={`${cls.Layout} ${className}`}>
        <Outlet />
      </div>
      <Footer />

    </>
  );
};
