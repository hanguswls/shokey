import { useState, useEffect } from 'react';
import { putUser, deleteUser } from '../apis/userApi';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import useMyUser from './useMyUser';
import useLogout from './useLogout';

/**
 * 주요 기능:
 * - 사용자 정보 수정 (UpdateUser.jsx에서 사용)
 * - 회원 탈퇴
 */
const useManageMyUser = () => {
  const [cookies, _ , removeCookies] = useCookies(['accessToken', 'refreshToken']);
  const { user, setUser } = useMyUser();
  const [updatedUser, setUpdatedUser] = useState();
  const navigate = useNavigate();
  const logout = useLogout();

  useEffect(() => {
    if (user) {
      setUpdatedUser({...user});
    }
  }, [user]);

  useEffect(()=>{
    console.table(updatedUser);
  }, [updatedUser]);

  const handleUserGenderToggle = () => {
    setUpdatedUser(prev => ({...prev, userGender: !updatedUser.userGender }))
  }

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateUser = async () => {
    try {
      await putUser(updatedUser, cookies.accessToken);
      alert('사용자 정보가 수정되었습니다.');
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
      removeCookies('accessToken');
      removeCookies('refreshToken');
      alert('탈퇴되었습니다.');
      logout();
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return {
    updatedUser,
    handleUserGenderToggle,
    handleUserChange,
    handleUpdateUser,
    handleDeleteUser,
  };
}

export default useManageMyUser
