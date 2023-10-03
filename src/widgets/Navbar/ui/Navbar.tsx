/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { UserOutlined } from '@ant-design/icons';
import { Logo } from 'shared/ui/Logo/Logo';
import { UserCard } from 'widgets/UserCard';
import { availableToAuthorizedUser, roleSelector, userDataSelector } from 'entities/user';
import { useAppSelector } from 'app/providers/StoreProvider/index';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Popover } from 'shared/ui/Popover/Popover';
import { Header } from 'shared/ui/Header/Header';
import { defaultRedirect } from 'shared/lib/defaultRedirect';
import { PrivateComponent } from 'shared/ui/PrivateComponent/PrivateComponent';
import { GoBackButton } from '../../GoBackButton/ui/GoBackButton';
import cls from './Navbar.module.scss';
import { userCardContent } from '../model/navbarModel';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const { userName } = useAppSelector(userDataSelector);
  const roleName = useAppSelector(roleSelector) as unknown as string;

  return (
    <Header
      className={`${cls.Navbar} ${className}`}
    >
      {/* https://ecrf.bioequivalencetrials.ru/api/net/admin/panel */}
      <div style={{ cursor: 'pointer' }} onClick={() => defaultRedirect(`${__BASE_URL__}/api/net/Protocols`)}>
        <Logo className={cls.logo} />
      </div>
      <GoBackButton classNames={cls.goBackButton} />
      <PrivateComponent accessRules={availableToAuthorizedUser} roleName={roleName}>
        <div className={cls.menuItemsWrapper}>
          <div className={cls.nameInfoWrapper}>
            <span>{userName}</span>
          </div>
          <Popover
            placement="bottom"
            content={(
              <UserCard
                title="Информация о пользователе"
                cardContent={userCardContent}
              />
          )}
          >
            <Avatar className={cls.avatar} icon={<UserOutlined />} />
          </Popover>
        </div>
      </PrivateComponent>
    </Header>
  );
};
