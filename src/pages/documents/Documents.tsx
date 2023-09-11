import { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { OutpatientCardsTable } from 'features/outpatientCardsList/ui/OutpatienCardsTable';
import { Button } from 'shared/ui/Button';
import cls from './Documents.module.scss';

const Documents = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const onClick = useCallback(() => {
    navigate(`/document/data/${id}`);
  }, [id, navigate]);

  return (
    <div className={cls.Documents}>
      <Button className={cls.button} type="primary" onClick={onClick}>Создать амбулаторную карту</Button>
      <OutpatientCardsTable />
    </div>

  );
};

export default Documents;
