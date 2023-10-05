import Cookies from 'js-cookie';
import { setUserData } from '../model/slice/user.slice';

export const retrieveDataFromCookie = () => (dispatch) => {
  const userName = Cookies.get('token_name');
  const id = Cookies.get('token_id');
  const role = Cookies.get('token_role');
  const roleName = Cookies.get('token_rolename');
  const centerId = Cookies.get('token_centerId');

  dispatch(setUserData({
    userName,
    id,
    role,
    centerId,
    roleName,
  }));
};
