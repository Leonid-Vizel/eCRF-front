import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import { DownloadForm } from 'shared/ui/DownloadForm/DownloadForm';
import { StationaryCard } from '../types/stationaryCardTypes';

export const columns: ColumnsType = [
  {
    title: 'ФИО',
    key: 'fullName',
    render: (_, record: StationaryCard) => `${record.secondName} ${record.firstName} ${record.thirdName ? record.thirdName : ''}`,
  },
  {
    title: 'Дата рождения',
    dataIndex: 'birthDate',
    key: 'birthDate',
  },
  {
    title: 'Дата создания',
    dataIndex: 'createDate',
    key: 'createDate',
  },
  {
    title: 'СНИЛС',
    dataIndex: 'snils',
    key: 'snils',
  },
  {
    title: 'Действия',
    key: 'action',
    render: (_, record: StationaryCard) => (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <DownloadForm
          action={`/api/net/Card/Export/${record?.id}`}
          title="Напечатать"
        />
        <Link to={`/stationaryCards/card/${record?.outpatientId}`}>Перейти</Link>
      </div>
    ),
  },
];
