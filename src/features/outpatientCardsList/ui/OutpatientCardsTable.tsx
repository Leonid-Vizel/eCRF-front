import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Table } from 'shared/ui/Table/Table';
import { Spinner } from 'shared/ui/Spinner';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { documentLoadingSelector, outpatientCardsSelector } from 'entities/outpatientCards';
import { columns } from '../model/outpatientCardMeta';
import cls from './OutpatientCardsTable.module.scss';
import { getOutpatientCards } from '../model/getOutpatientCards';

export const OutpatientCardsTable = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const outpatientCards = useAppSelector(outpatientCardsSelector);
  const isLoading = useAppSelector(documentLoadingSelector);

  const onPageChange = (page:number) => {
    dispatch(getOutpatientCards({ id, page }));
  };

  useEffect(() => {
    dispatch(getOutpatientCards({ id }));
  }, [dispatch, id]);

  return (
    <Spinner spinning={isLoading} wrapperClassName={cls.spinner}>
      <Table
        dataSource={outpatientCards?.cards}
        columns={columns}
        pagination={{
          pageSize: outpatientCards?.pageSize,
          hideOnSinglePage: true,
          total: outpatientCards?.totalPages,
          onChange: onPageChange,
        }}
      />
    </Spinner>
  );
};
