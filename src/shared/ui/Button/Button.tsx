/* eslint-disable react/jsx-props-no-spreading */
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import { FC, memo } from 'react';

export interface ButtonProps extends Omit<AntButtonProps, 'onClick'> {
  onClick?: (params: unknown) => void
}

export const Button: FC<ButtonProps> = memo((props) => {
  const { children, onClick, ...otherProps } = props;

  const handleClick = (params: unknown) => {
    if (onClick) {
      onClick(params);
    }
  };

  return <AntButton onClick={handleClick} {...otherProps}>{children}</AntButton>;
});
