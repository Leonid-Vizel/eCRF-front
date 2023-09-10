import { FC } from 'react';
import { Menu as AntMenu, MenuProps as AntdMenuProps, SubMenuProps as AntdSubMenuProps } from 'antd';

type MenuChainTypes = 'default' | 'subMenu';

interface MenuDefaultProps extends AntdMenuProps {
  menuChainType: MenuChainTypes
}
interface SubMenuProps extends AntdSubMenuProps {
  menuChainType: MenuChainTypes
}
// todo возможно стоит вынести но пока не понятно куда
function menuTypeGuard(props: MenuDefaultProps | SubMenuProps): props is SubMenuProps {
  return props.menuChainType === 'subMenu';
}

export const Menu: FC< MenuDefaultProps | SubMenuProps> = (props) => {
  if (menuTypeGuard(props)) {
    return (
      <AntMenu.SubMenu {...props} />
    );
  }
  return (
    <AntMenu {...props} />);
};
