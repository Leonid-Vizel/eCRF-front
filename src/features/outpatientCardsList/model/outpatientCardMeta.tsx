import { ColumnsType } from 'antd/es/table';
import { ICard } from 'entities/outpatientCards';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { DownloadForm } from 'shared/ui/DownloadForm/DownloadForm';
import { BASE_CARD_URL } from 'utils/request/NewAxiosRequest';

export const columns: ColumnsType = [
  {
    title: 'ФИО',
    key: 'fullName',
    render: (_, record: ICard) => `${record.secondName} ${record.firstName} ${record.thirdName}`,
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
    title: 'Действия',
    key: 'action',
    render: (_, record:ICard) => (
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <DownloadForm
          action={`${BASE_CARD_URL}/Card/Export/${record.id}`}
          inputValue={`${Cookies.get('token')}`}
          title="Напечатать"
        />
        <Link to={`/document/data/edit/${record.protocol.id}/${record.id}`}>Перейти</Link>
      </div>
    ),
  },
];
