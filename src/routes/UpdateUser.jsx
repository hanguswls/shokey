import React from 'react';
import './User.css';
import useManageMyUser from '../hooks/useManageMyUser';
import { useNavigate } from 'react-router-dom';

const UpdateUser = () => {
  const {
    updatedUser,
    handleUserChange,
    handleUpdateUser,
    handleDeleteUser,
  } = useManageMyUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!updatedUser) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/login');
    }
  }, [])

  return (
    <div className="user-container">
      <h2 className="user-title">사용자 정보 수정</h2>
      <div className="user-fields">
        <div className="user-field">
          <span className="user-field-name">아이디</span>
          <input
            type="text"
            name="userId"
            className="user-field-value"
            value={updatedUser?.userId || ''}
            onChange={handleUserChange}
          />
        </div>
        <div className="user-field">
          <span className="user-field-name">패스워드</span>
          <input
            type="password"
            name="userPassword"
            className="user-field-value"
            value={updatedUser?.userPassword || ''}
            onChange={handleUserChange}
            />
        </div>
        <div className="user-field">
          <span className="user-field-name">이름</span>
          <input
            type="text"
            name="userName"
            value={updatedUser?.userName}
            onChange={handleUserChange}
            className="user-field-value"
          />
        </div>
        <div className="user-field">
          <span className="user-field-name">성별</span>
          <div className="toggle-group">
            <button
              name="userGender"
              value={true}
              className={`toggle-button ${updatedUser?.userGender ? 'active' : ''}`}
              onClick={handleUserChange}
            >
              남성
            </button>
            <button
              name="userGender"
              value={false}
              className={`toggle-button ${!updatedUser?.userGender ? 'active' : ''}`}
              onClick={() => handleToggle('userGender', false)}
            >
              여성
            </button>
          </div>
        </div>
        <div className="user-field">
          <span className="user-field-name">이메일</span>
          <input
            type="text"
            name="userEmail"
            value={updatedUser?.userEmail || ''}
            onChange={handleUserChange}
            className="user-field-value"
          />
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleUpdateUser} className="update-button">수정완료</button>
        <button onClick={handleDeleteUser} className="delete-button">탈퇴하기</button>
      </div>
    </div>
  );
};

export default UpdateUser;