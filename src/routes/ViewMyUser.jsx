import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useManageMyUser from '../hooks/useManageMyUser';
import useMyUser from '../hooks/useMyUser';
import './User.css';
import Field from '../components/field/Field';
import AccountsInfo from '../components/accounts/AccountsInfo';

const ViewMyUser = () => {
  const navigate = useNavigate();
  const { user } = useMyUser();
  const { handleDeleteUser } = useManageMyUser();

  useEffect(() => {
    if (!user) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
    }
  }, [user]);

  return (
    <main className="user-container">
      <section className="user-section">
        <h2 className="user-subtitle">사용자 정보</h2>
        <div className="fields">
          <Field label="아이디" value={ user?.userId } />
          <Field label="이름" value={ user?.userName } />
          <Field label="성별" value={ user?.userGender ? '남성' : '여성' } />
          <Field label="이메일" value={ user?.userEmail } />
        </div>
        <div className="buttons">
          <Link to={`/update-user`} className="link-to-update-user">수정하기</Link>
          <button onClick={handleDeleteUser}>탈퇴하기</button>
      </div>
      </section>
      <section className="user-section">
        <h2 className="user-subtitle">계좌 정보</h2>
        <AccountsInfo />
      </section>
    </main>
  );
};

export default ViewMyUser;