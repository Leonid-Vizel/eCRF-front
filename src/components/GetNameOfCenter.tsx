import React, { useEffect, useState } from 'react';
import {
  axiosCardRequest,
  axiosRequest,
} from '../utils/request/NewAxiosRequest';
import { cookiesData } from '../utils/cookies/getCookies';

const GetNameOfCenter = ({
  handleEditUser,
  id,
  email,
  name,
  role,
  organizationId,
  center_id,
}: any) => {
  const [centerName, setCenterName] = useState<any>('');
  const [orgName, setOrgName] = useState<any>('');

  type UserRole = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

  const UserRoleMap: Record<UserRole, string> = {
    0: 'Администратор',
    1: 'Исследователь',
    2: 'Главный исследователь',
    3: 'Монитор',
    4: 'Дата менеджер',
    5: 'Аудитор контроля качества',
    6: 'Медицинский монитор',
    7: 'Специалист по фармаконадзору',
  };

  const userRole: UserRole = Number(role) as UserRole;
  const roleName: string = UserRoleMap[userRole];

  useEffect(() => {
    const getCenterName: any = async () => {
      await axiosCardRequest.get(`/center/name/${center_id}`).then((res) => {
        setCenterName(res.data);
      });
    };

    const getOrgName: any = async () => {
      await axiosCardRequest
        .get(`/organisation/name/${organizationId}`)
        .then((res) => {
          setOrgName(res.data);
        });
    };

    getOrgName();
    getCenterName();
  }, []);

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{email}</td>
      <td>{name}</td>
      <td>{orgName.message}</td>
      <td>{centerName.message}</td>
      <td>{roleName}</td>
      <td>
        <button onClick={() => handleEditUser(id)}>🖊️</button>
      </td>
    </tr>
  );
};

export default GetNameOfCenter;
