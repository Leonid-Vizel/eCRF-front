import { PrinterOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import { ICard } from 'entities/outpatientCards';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { DownloadForm } from 'shared/ui/DownloadForm/DownloadForm';

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
    render: (_, record:ICard) => (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <DownloadForm
          action={`/api/net/stationaryCard/Export/${record?.id}`}
          inputValue={`${Cookies.get('token')}`}
          type="text"
          icon={<PrinterOutlined />}
        />
        <Link to={`/StationaryCards/card/${record?.id}`}>Перейти</Link>

      </div>
    ),
  },
];
