import { Tabs as AntdTabs, TabsProps as AntdTabsProps } from 'antd';
import { FC } from 'react';
import cls from './Tabs.module.scss';

interface TabsProps extends AntdTabsProps {
  className?: string;
}

export const Tabs:FC<TabsProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <AntdTabs className={`${cls.Tabs} ${className}`} {...rest} />
  );
};
