import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { getMyUser } from '../apis/userApi';
import useUserStore from '../store/userStore';

// accessToken이 바뀔 때 id, userName을 받아와 전역상태로 저장
const useInitializeUser = () => {
  const [cookies] = useCookies(['accessToken']);
  const { setId, setUserName, setInfluencerId, clearUser } = useUserStore();

  useEffect(() => {
    initializeUser();
  }, [cookies.accessToken]);

  const initializeUser = async () => {
    if (cookies.accessToken) {
      try {
        const res = await getMyUser(cookies.accessToken);
        setId(res.data.id);
        setUserName(res.data.userName);
        setInfluencerId(res.data.influencerId);
      } catch (error) {
        alert(error.message);
        clearUser();
      }
    } else {
      clearUser();
    }
  };
};

export default useInitializeUser;