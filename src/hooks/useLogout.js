import { useCookies } from 'react-cookie';
import useUserStore from '../store/userStore';

const useLogout = () => {
  const [, , removeCookie] = useCookies(['accessToken', 'refreshToken']);
  const clearUser = useUserStore(state => state.clearUser);

  const logout = () => {
    try {
      removeCookie('accessToken', { path: '/' });
      removeCookie('refreshToken', { path: '/' });
      clearUser();
    } catch (error) {
      alert('로그아웃 오류가 발생했습니다.', error);
    }
  };

  return logout;
}

export default useLogout;