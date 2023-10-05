import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'shared/ui/Table/Table';
import { Spinner } from 'shared/ui/Spinner';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import {
  documentLoadingSelector,
} from 'entities/outpatientCards';
import { stationaryCardsSelector } from 'entities/stationaryCards';
import cls from './StationaryCardsTable.module.scss';
import { CardsList, getCardsList } from '../../model/lib/getCardsList';
import { columns } from '../../model/stationaryCardsTableModel';

export const StationaryCardsTable = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const stationaryCards = useAppSelector(stationaryCardsSelector);
  const isLoading = useAppSelector(documentLoadingSelector);

  useEffect(() => {
    dispatch(getCardsList({ entity: CardsList.STATIONARY_CARDS_LIST, id }));
  }, [dispatch, id]);

  return (
    <Spinner spinning={isLoading} wrapperClassName={cls.spinner}>
      <Table
        dataSource={stationaryCards}
        columns={columns}
        pagination={{
          hideOnSinglePage: true,
        }}
      />
    </Spinner>
  );
};
