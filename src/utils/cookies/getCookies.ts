import Cookies from 'js-cookie';

export const cookiesData = {
  cookieName: Cookies.get('token_name'),
  cookieCenterId: Cookies.get('token_centerId'),
  cookieId: Cookies.get('token_id'),
  cookieRole: Cookies.get('token_role'),
};

// const cookieName = Cookies.get('token_name');
// const cookieCenterId = Cookies.get('token_centerId');
// const cookieId = Cookies.get('token_id');
