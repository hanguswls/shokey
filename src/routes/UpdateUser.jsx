import React from 'react';
import useMyUser from '../hooks/useMyUser';
import './User.css';

const UpdateUser = () => {
  const {
    myUser,
    handleUserIdChange,
    handleUserPasswordChange,
    handleUserNameChange,
    handleUserEmailChange,
    handleToggle,
    handleUpdateUser,
    handleDeleteUser,
  } = useMyUser();

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
            value={myUser.userId}
            onChange={handleUserIdChange}>
          </input>
        </div>
        <div className="user-field">
          <span className="user-field-name">패스워드</span>
          <input
            type="password"
            name="userPassword"
            className="user-field-value"
            value={myUser.userPassword || ''}
            onChange={handleUserPasswordChange}>
          </input>
        </div>
        <div className="user-field">
          <span className="user-field-name">이름</span>
          <input
            type="text"
            name="userName"
            value={myUser.userName}
            onChange={handleUserNameChange}
            className="user-field-value"
          />
        </div>
        <div className="user-field">
          <span className="user-field-name">성별</span>
          <div className="toggle-group">
            <button
              type="button"
              className={`toggle-button ${myUser.userGender ? 'active' : ''}`}
              onClick={() => handleToggle('userGender', true)}
            >
              남성
            </button>
            <button
              type="button"
              className={`toggle-button ${!myUser.userGender ? 'active' : ''}`}
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
            name="userName"
            value={myUser.userEmail}
            onChange={handleUserEmailChange}
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