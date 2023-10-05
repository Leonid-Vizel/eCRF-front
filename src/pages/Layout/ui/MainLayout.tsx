import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';
import { Footer } from 'widgets/Footer';
import { GoBackButton } from 'widgets/GoBackButton/ui/GoBackButton';
import { availableToAuthorizedUser, roleSelector } from 'entities/user';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { PrivateComponent } from 'shared/ui/PrivateComponent/PrivateComponent';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
  className?: string;
}

export const MainLayout:FC<MainLayoutProps> = (props) => {
  const { className } = props;
  const roleName = useAppSelector(roleSelector) as unknown as string;
  return (
    <div className={cls.app}>
      <Navbar />
      <PrivateComponent accessRules={availableToAuthorizedUser} roleName={roleName}>
        <GoBackButton classNames={cls.goBackButton} />
      </PrivateComponent>
      <div className={`${cls.Layout} ${className}`}>
        <Outlet />
      </div>
      <Footer />

    </div>
  );
};
