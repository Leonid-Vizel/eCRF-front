import { Menu } from 'shared/ui/Menu/Menu';
// вынести в shared
import { UserOutlined } from '@ant-design/icons';
import { Logo } from 'shared/ui/Logo/Logo';
import { UserCard } from 'widgets/UserCard';
import { userDataSelector } from 'entities/user';
import { useAppSelector } from 'app/providers/StoreProvider/index';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Popover } from 'shared/ui/Popover/Popover';
import { Link } from 'react-router-dom';
import cls from './Navbar.module.scss';
import { userCardContent } from '../model/navbarModel';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const { fullName } = useAppSelector(userDataSelector);

  return (
    <Menu
      menuChainType="default"
      className={`${cls.Navbar} ${className}`}
      mode="horizontal"
    >
      {/* https://ecrf.bioequivalencetrials.ru/api/net/admin/panel */}
      <Link to="/document/1">
        <Logo className={cls.logo} />
      </Link>
      <div className={cls.menuItemsWrapper}>
        <div className={cls.nameInfoWrapper}>
          <span>{fullName}</span>
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
    </Menu>
  );
};
