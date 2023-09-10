import { FC } from 'react';
import { Card as AntdCard, CardProps as AntCardProps } from 'antd';
import cls from './Card.module.scss';

interface CardProps extends AntCardProps {
  className?: string;
}

export const Card:FC<CardProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <AntdCard className={`${cls.Card} ${className}`} {...rest} />
  );
};
