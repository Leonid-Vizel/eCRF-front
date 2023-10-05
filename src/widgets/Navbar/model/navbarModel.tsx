import { RootState } from 'app/providers/StoreProvider/index';
import { UserCardConntentTypes } from '../../UserCard/ui/UserCard';

export const userCardContent: UserCardConntentTypes[] = [
  { id: 'userCardFullName', contentTitle: 'ФИО', description: (state: RootState) => state.user.data.userName },
  {
    id: 'userCardRole',
    contentTitle: 'Роль',
    description: (state: RootState) => state.user.data.roleName,
    pathTo: '/admin/panel',
  },
];
