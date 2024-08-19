import { putUser, deleteUser } from '../apis/userApi';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import useUserStore from '../store/useUserStore';

const useMyUser = () => {
  const [cookies, _ , removeCookies] = useCookies(['accessToken', 'refreshToken']);
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();

  const handleUserIdChange = (e) => {
    setUser({...user, userId: e.target.value});
  }

  const handleUserPasswordChange = (e) => {
    setUser({...user, userPassword: e.target.value});
  }

  const handleUserNameChange = (e) => {
    setUser({...user, userName: e.target.value});
  };

  const handleUserEmailChange = (e) => {
    setUser({...user, userEmail: e.target.value});
  };

  const handleToggle = (field, value) => {
    setUser({...user, [field]: value});
  };

  const handleUpdateUser = async () => {
    try {
      await putUser(user, cookies.accessToken);
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
      setUser(null);
      removeCookies('accessToken');
      removeCookies('refreshToken');
      alert('사용자 정보가 탈퇴되었습니다.');
    } catch (error) {
      alert(error.message);
    }
  };

  return {
    user,
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
