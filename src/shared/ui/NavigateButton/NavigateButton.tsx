import { ButtonProps } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FC, useCallback } from 'react';
import { Button } from '../Button';

interface NavigateButtonProps extends ButtonProps {
  to: string
  children?: string
}

export const NavigateButton:FC<NavigateButtonProps> = (props) => {
  const {
    to, children, onClick, ...otherProps
  } = props;
  const navigate = useNavigate();

  const onButtonClick = useCallback((event) => {
    if (onClick) {
      onClick(event);
    }
    navigate(to);
  }, [navigate, onClick, to]);

  return <Button onClick={onButtonClick} {...otherProps}>{children}</Button>;
};
