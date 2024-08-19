import { useState, useEffect } from 'react';
import { getUser } from '../apis/userApi';

const useUser = (id) => {

  const [user, setUser] = useState({
    id: '',
    userName: '',
    userGender: true,
    userEmail: '',
    userRole: 0,
  });

  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id]);

  //사용자 정보를 가져와서 user에 담음
  const fetchUser = async () => {
    try {
      const res = await getUser(id);
      setUser(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  return { user };
}

export default useUser
