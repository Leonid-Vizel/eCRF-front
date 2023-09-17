import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { OutpatientCardsTable } from 'features/outpatientCardsList/ui/OutpatientCardsTable';
import { Button } from 'shared/ui/Button';
import cls from './OutpatientCardsPage.module.scss';

export const OutpatientCardsPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const onClick = useCallback(() => {
    navigate(`card/${id}`);
  }, [id, navigate]);

  return (
    <div className={cls.Documents}>
      <Button className={cls.button} type="primary" onClick={onClick}>Создать амбулаторную карту</Button>
      <OutpatientCardsTable />
    </div>

  );
};
