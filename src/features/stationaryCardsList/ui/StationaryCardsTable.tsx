import { Table } from 'shared/ui/Table/Table';
import { Spinner } from 'shared/ui/Spinner';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { columns } from '../model/stationaryCardListMeta';
import cls from './StationaryCardsTable.module.scss';
import { getStationaryCards } from '../model/lib/getStationaryCardsAction';
import { stationaryCardsSelector } from '../model/selectors/stationaryCardsList.selector';

export const StationaryCardsTable = () => {
  const dispatch = useAppDispatch();
  const stationaryCards = useAppSelector(stationaryCardsSelector);

  useEffect(() => {
    dispatch(getStationaryCards());
  }, [dispatch]);

  return (
    <Spinner spinning={false} wrapperClassName={cls.spinner}>
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
