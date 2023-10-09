import { PrinterOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import { ICard } from 'entities/outpatientCards';
import { Link } from 'react-router-dom';
import { DownloadForm } from 'shared/ui/DownloadForm/DownloadForm';
import dayJS from 'dayjs';

export const columns: ColumnsType = [
  {
    title: 'ФИО',
    key: 'fullName',
    render: (_, record: ICard) => `${record.secondName} ${record.firstName} ${record.thirdName ? record.thirdName : ''}`,
  },
  {
    title: 'Дата рождения',
    dataIndex: 'birthDate',
    key: 'birthDate',
    render(_, record: ICard) {
      const { birthDate } = record;
      return birthDate ? `${dayJS(birthDate).format('DD.MM.YYYY')}` : '';
    },
  },
  {
    title: 'Дата создания',
    dataIndex: 'createDate',
    key: 'createDate',
    render(_, record: ICard) {
      const { createDate } = record;
      return createDate ? `${dayJS(createDate).format('DD.MM.YYYY')}` : '';
    },
  },
  {
    title: 'СНИЛС',
    dataIndex: 'snils',
    key: 'snils',
  },
  {
    title: 'Действия',
    key: 'action',
    render: (_, record:ICard) => (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <DownloadForm
          action={`/api/net/stationaryCard/Export/${record?.id}`}
          type="text"
          icon={<PrinterOutlined />}
        />
        <Link to={`/StationaryCards/card/${record?.outpatientId}`}>Перейти</Link>

      </div>
    ),
  },
];
