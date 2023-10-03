import { ArrowLeftOutlined } from '@ant-design/icons';
import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'shared/ui/Button';

interface GoBackButtonProps {
  classNames: string
}

export const GoBackButton:FC<GoBackButtonProps> = ({ classNames }) => {
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return (
    <Button className={classNames} type="text" size="large" icon={<ArrowLeftOutlined />} onClick={goBack}>Назад</Button>
  );
};
