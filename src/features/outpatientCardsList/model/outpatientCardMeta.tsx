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
    title: 'Стационарная карта',
    dataIndex: 'statioanryCard',
    key: 'statioanryCard',
    render: (record) => (record?.stationaryId
      ? <Link to={`/stationaryCards/card/${record?.stationaryid}`}>Cтационарная карта</Link>
      : <Link to="/stationaryCards/card/create">Создать стационарную карту</Link>),
  },
  {
    title: 'Действия',
    key: 'action',
    render: (_, record:ICard) => (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <DownloadForm
          action={`/api/net/Card/Export/${record?.id}`}
          inputValue={`${Cookies.get('token')}`}
          type="text"
          icon={<PrinterOutlined />}
        />
        <Link to={`/outpatientCards/card/${record?.id}`}>Перейти</Link>

      </div>
    ),
  },
];
