/* eslint-disable react/jsx-props-no-spreading */
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import { FC } from 'react';

interface IButtonProps extends AntButtonProps {}

export const Button: FC<IButtonProps> = (props) => {
  const { children, ...otherProps } = props;

  return <AntButton {...otherProps}>{children}</AntButton>;
};
