import { useState, useEffect } from 'react';
import { getMyUserInfo, patchUserInfo, deleteUserInfo } from '../apis/userInfoApi';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import useUserStore from '../store/userStore';

const useMyUserInfo = () => {
  const [cookies, _ , removeCookies] = useCookies(['accessToken', 'refreshToken']);
  const navigate = useNavigate();
  const clearUser = useUserStore(state => state.clearUser);
  const [initialUserInfo, setInitialUserInfo] = useState({});
  const [myUserInfo, setMyUserInfo] = useState({
    userId: '',
    userName: '',
    userPassword: '',
    userGender: true,
    userEmail: '',
    userRole: 0,
  });

  useEffect(() => {
    if (cookies.accessToken) {
      fetchMyUserInfo();
    }
  }, [cookies])

  const fetchMyUserInfo = async() => {
    try {
      const res = await getMyUserInfo(cookies.accessToken);
      setMyUserInfo(res.data);
      setInitialUserInfo(res.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUserIdChange = (e) => {
    setMyUserInfo(prev => ({ ...prev, userId: e.target.value }));
  }

  const handleUserPasswordChange = (e) => {
    setMyUserInfo(prev => ({ ...prev, userPassword: e.target.value }));
  }

  const handleUserNameChange = (e) => {
    setMyUserInfo(prev => ({ ...prev, userName: e.target.value }));
  };

  const handleUserEmailChange = (e) => {
    setMyUserInfo(prev => ({ ...prev, userEmail: e.target.value }));
  };

  const handleToggle = (field, value) => {
    setMyUserInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleEdit = () => {
    navigate('update-user-info');
  };

  const handleUpdateUserInfo = async () => {
    const changedData = Object.keys(myUserInfo).reduce((acc, key) => {
      if (myUserInfo[key] !== initialUserInfo[key]) {
        acc[key] = myUserInfo[key];
      }
      return acc;
    }, {});

    if (Object.keys(changedData).length === 0) {
      alert('변경된 정보가 없습니다.');
      return;
    }

    try {
      await patchUserInfo(changedData, cookies.accessToken);
      alert('사용자 정보가 수정되었습니다.');
      fetchMyUserInfo();
      navigate('/mypage');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDeleteUserInfo = async () => {
    const isConfirmed = window.confirm('정말로 탈퇴하시겠습니까?');
    if (!isConfirmed) return;
    try {
      await deleteUserInfo(cookies.accessToken);
      clearUser();
      removeCookies('accessToken');
      removeCookies('refreshToken');
      alert('사용자 정보가 탈퇴되었습니다.');
    } catch (error) {
      alert(error.message);
    }
  };

  return {
    myUserInfo,
    handleUserIdChange,
    handleUserPasswordChange,
    handleUserNameChange,
    handleUserEmailChange,
    handleEdit,
    handleUpdateUserInfo,
    handleToggle,
    handleDeleteUserInfo,
  };
}

export default useMyUserInfo
