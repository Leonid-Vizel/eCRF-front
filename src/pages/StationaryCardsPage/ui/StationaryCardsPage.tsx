import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'shared/ui/Button';
import { StationaryCardsTable } from 'features/stationaryCardsList';
import cls from './StationaryCardsPage.module.scss';

export const StationaryCardsPage = () => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate('/stationaryCards/card/create');
  }, [navigate]);

  return (
    <div className={cls.wrapper}>
      <Button className={cls.button} type="primary" onClick={onClick}>
        Создать стационарную карту
      </Button>
      <StationaryCardsTable />
    </div>
  );
};
