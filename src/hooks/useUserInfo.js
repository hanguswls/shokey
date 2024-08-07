import { useState, useEffect } from 'react';
import { getUserInfo } from '../apis/userInfoApi';

const useUserInfo = (id) => {
  const [userInfo, setUserInfo] = useState({
    userId: '',
    userName: '',
    userGender: true,
    userEmail: '',
    userRole: 0,
  });

  useEffect(() => {
    if (id) {
      fetchUserInfo();
    }
  }, [id]);

  //사용자 정보를 가져와서 userInfo에 담음
  const fetchUserInfo = async () => {
    try {
      const res = await getUserInfo(id);
      setUserInfo(res.data);
    } catch (error) {
      alert(error.message);
    }
  };


  return {
    userInfo
  };
}

export default useUserInfo
