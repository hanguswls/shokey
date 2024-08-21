import { useState, useEffect } from 'react';
import { getUser } from '../apis/userApi';

const useUser = (id) => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (id) {
      fetchUser();
    }
  }, [id]);

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
