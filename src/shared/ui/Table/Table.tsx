import { FC } from 'react';
import { Table as AntdTable, TableProps as AntdTableProps } from 'antd';

interface TableProps extends AntdTableProps<unknown> {
  className?: string;
}

export const Table: FC<TableProps> = (props) => {
  const { className } = props;
  return (
    <AntdTable className={className} {...props} />
  );
};
