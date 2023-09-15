// todo добавить типизацию для стейта
import { RootState } from 'store/store';
import { UserCardConntentTypes } from '../../UserCard/ui/UserCard';

export const userCardContent: UserCardConntentTypes[] = [
  { id: 'userCardFullName', contentTitle: 'ФИО', description: (state: RootState) => state.user.data.fullName },
  {
    id: 'userCardRole',
    contentTitle: 'Роль',
    description: (state: RootState) => state.user.data.role,
    pathTo: '/admin/panel',
  },
];
