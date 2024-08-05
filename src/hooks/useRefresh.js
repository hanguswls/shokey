import { useCookies } from 'react-cookie';
import { postRefresh } from '../apis/authApi';
import { useEffect } from 'react';

const useRefresh = () => {
  const [cookies, setCookie, ] = useCookies(['accessToken', 'refreshToken']);
  const accessTokenExpiration = 2 * 60 * 60 * 1000;
  const refreshTokenExpiration = 7 * 24 * 60 * 60 * 1000;

  useEffect(()=>{
    if (!cookies.accessToken && cookies.refreshToken) {
      refresh();
    }
  }, [cookies])

  const refresh = async () => {
    postRefresh(cookies.refreshToken)
    .then(res => {
      setCookie('accessToken', res.data.accessToken, {
        path: '/',
        expires: new Date(Date.now() + accessTokenExpiration)
      });
      setCookie('refreshToken', res.data.refreshToken, {
        path: '/',
        expires: new Date(Date.now() + refreshTokenExpiration )
      });
    })
    .catch(error => {
      alert(error.message);
    })
  };
}

export default useRefresh;