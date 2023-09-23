import { FC } from 'react';
import {
  Header as AntdHeader, BasicProps,
} from 'antd/es/layout/layout';
// import cls from './header.module.scss';

interface HeaderProps extends BasicProps {
}

export const Header:FC<HeaderProps> = (props) => (
  <AntdHeader {...props} />
);
