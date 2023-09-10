// todo добавить типизацию для стейта
import { RootState } from 'store/store';
import { UserCardConntentTypes } from '../../UserCard/ui/UserCard';

export const userCardContent: UserCardConntentTypes[] = [
  { contentTitle: 'ФИО', description: (state: RootState) => state.user.data.fullName },
  { contentTitle: 'Роль', description: (state: RootState) => state.user.data.role, pathTo: '/admin/panel' },
];
