export { IUser } from './types/types';
export {
  userSlice, setIsAuth, setIsLogout,
} from './model/slice/login.slice';
export {
  userDataSelector,
  authSelector,
} from './model/selectors/userSelectors';
