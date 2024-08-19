import { useState, useEffect } from 'react';
import { getMyUser, postUser, putUser, deleteUser } from '../apis/userApi';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import userStore from '../store/userStore';

const useMyUser = () => {
  const [cookies, _ , removeCookies] = useCookies(['accessToken', 'refreshToken']);
  const navigate = useNavigate();
  const clearUser = userStore(state => state.clearUser);
  const [myUser, setMyUser] = useState({
    userId: '',
    userName: '',
    userPassword: '',
    userGender: true,
    userEmail: '',
    userRole: 0,
  });

  useEffect(() => {
    if (cookies.accessToken) {
      fetchMyUser();
    }
  }, [cookies])

  const fetchMyUser = async() => {
    try {
      const res = await getMyUser(cookies.accessToken);
      setMyUser(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUserIdChange = (e) => {
    setMyUser(prev => ({ ...prev, userId: e.target.value }));
  }

  const handleUserPasswordChange = (e) => {
    setMyUser(prev => ({ ...prev, userPassword: e.target.value }));
  }

  const handleUserNameChange = (e) => {
    setMyUser(prev => ({ ...prev, userName: e.target.value }));
  };

  const handleUserEmailChange = (e) => {
    setMyUser(prev => ({ ...prev, userEmail: e.target.value }));
  };

  const handleToggle = (field, value) => {
    setMyUser(prev => ({ ...prev, [field]: value }));
  };

  const handleUpdateUser = async () => {
    try {
      await putUser(myUser, cookies.accessToken);
      alert('사용자 정보가 수정되었습니다.');
      fetchMyUser();
      navigate('/mypage');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDeleteUser = async () => {
    const isConfirmed = window.confirm('정말로 탈퇴하시겠습니까?');
    if (!isConfirmed) return;
    try {
      await deleteUser(cookies.accessToken);
      clearUser();
      removeCookies('accessToken');
      removeCookies('refreshToken');
      alert('사용자 정보가 탈퇴되었습니다.');
    } catch (error) {
      alert(error.message);
    }
  };

  return {
    myUser,
    handleUserIdChange,
    handleUserPasswordChange,
    handleUserNameChange,
    handleUserEmailChange,
    handleUpdateUser,
    handleToggle,
    handleDeleteUser,
  };
}

export default useMyUser