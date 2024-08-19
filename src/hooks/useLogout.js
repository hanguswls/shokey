import { useCookies } from 'react-cookie';
import useUserStore from '../store/useUserStore';

const useLogout = () => {
  const [, , removeCookie] = useCookies(['accessToken', 'refreshToken']);
  const { setUser } = useUserStore();

  const logout = () => {
    try {
      removeCookie('accessToken', { path: '/' });
      removeCookie('refreshToken', { path: '/' });
      setUser(null);
    } catch (error) {
      alert('로그아웃 오류가 발생했습니다.', error);
    }
  };

  return logout;
}

export default useLogout;