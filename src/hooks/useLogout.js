import { useCookies } from 'react-cookie';

const useLogout = () => {
  const [, , removeCookie] = useCookies(['accessToken', 'refreshToken']);

  const logout = () => {
    try {
      removeCookie('accessToken', { path: '/' });
      removeCookie('refreshToken', { path: '/' });
    } catch (error) {
      alert('로그아웃 오류가 발생했습니다.', error);
    }
  };

  return logout;
}

export default useLogout;