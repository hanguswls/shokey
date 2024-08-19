import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { getMyUser } from '../apis/userApi';
import useUserStore from '../store/useUserStore';

// accessToken이 바뀔 때 user 정보를 받아와 전역상태로 저장
const useInitializeUser = () => {
  const [cookies] = useCookies(['accessToken']);
  const { setUser } = useUserStore();

  useEffect(() => {
    initializeUser();
  }, [cookies.accessToken]);

  const initializeUser = async () => {
    if (cookies.accessToken) {
      try {
        const res = await getMyUser(cookies.accessToken);
        setUser(res.data);
      } catch (error) {
        alert(error.message);
        setUser(null);
      }
    } else {
      setUser(null);
    }
  };
};

export default useInitializeUser;