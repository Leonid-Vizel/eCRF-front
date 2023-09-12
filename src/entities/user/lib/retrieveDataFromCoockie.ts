import Cookies from 'js-cookie';
import { setUserData } from '../model/slice/login.slice';

export const retrieveDataFromCookie = () => (dispatch) => {
  const userName = Cookies.get('token_name');
  const userId = Cookies.get('token_id');
  const userRole = Cookies.get('token_rolename');
  const userCenter = Cookies.get('token_centerId');
  dispatch(setUserData({
    userName,
    userId,
    userRole,
    userCenter,
  }));
};
