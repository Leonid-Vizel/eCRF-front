import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { OutpatientCardsTable } from 'features/outpatientCardsList/ui/OutpatientCardsTable';
import { Button } from 'shared/ui/Button';
import { useAppDispatch } from 'app/providers/StoreProvider';
import { OUTAPTIENT_CARD_MAIN_INFO, createNewCard, setTabName } from 'features/outpatientCard';
import cls from './OutpatientCardsPage.module.scss';

export const OutpatientCardsPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const onClick = useCallback(() => {
    navigate('/outpatientCards/card/create');
    dispatch(createNewCard(id));
    dispatch(setTabName(OUTAPTIENT_CARD_MAIN_INFO));
  }, [id, navigate]);

  return (
    <div className={cls.Documents}>
      <Button className={cls.button} type="primary" onClick={onClick}>Создать амбулаторную карту</Button>
      <OutpatientCardsTable />
    </div>

  );
};
