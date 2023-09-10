import { FC } from 'react';
import AntdMenuItem, { MenuItemProps as AntdMenuItemProps } from 'antd/es/menu/MenuItem';

interface MenuItemProps extends AntdMenuItemProps {}

export const MenuItem:FC<MenuItemProps> = (props) => (
  <AntdMenuItem {...props} />
);
