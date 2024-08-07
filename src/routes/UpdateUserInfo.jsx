import React from 'react';
import useMyUserInfo from '../hooks/useMyUserInfo';
import './UserInfo.css';

const UpdateUserInfo = () => {
  const {
    myUserInfo,
    handleUserIdChange,
    handleUserPasswordChange,
    handleUserNameChange,
    handleUserEmailChange,
    handleToggle,
    handleUpdateUserInfo,
    handleDeleteUserInfo,
  } = useMyUserInfo();

  return (
    <div className="user-info-container">
      <h2 className="title">사용자 정보 수정</h2>
      <div className="fields">
        <div className="field">
          <span className="field-name">아이디</span>
          <input
            type="text"
            name="userId"
            className="field-value"
            value={myUserInfo.userId}
            onChange={handleUserIdChange}>
          </input>
        </div>
        <div className="field">
          <span className="field-name">패스워드</span>
          <input
            type="password"
            name="userPassword"
            className="field-value"
            value={myUserInfo.userPassword}
            onChange={handleUserPasswordChange}>
          </input>
        </div>
        <div className="field">
          <span className="field-name">이름</span>
          <input
            type="text"
            name="userName"
            value={myUserInfo.userName}
            onChange={handleUserNameChange}
            className="field-value"
          />
        </div>
        <div className="field">
          <span className="field-name">성별</span>
          <div className="toggle-group">
            <button
              type="button"
              className={`toggle-button ${myUserInfo.userGender ? 'active' : ''}`}
              onClick={() => handleToggle('userGender', true)}
            >
              남성
            </button>
            <button
              type="button"
              className={`toggle-button ${!myUserInfo.userGender ? 'active' : ''}`}
              onClick={() => handleToggle('userGender', false)}
            >
              여성
            </button>
          </div>
        </div>
        <div className="field">
          <span className="field-name">이메일</span>
          <input
            type="text"
            name="userName"
            value={myUserInfo.userEmail}
            onChange={handleUserEmailChange}
            className="field-value"
          />
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleUpdateUserInfo} className="update-button">수정완료</button>
        <button onClick={handleDeleteUserInfo} className="delete-button">탈퇴하기</button>
      </div>
    </div>
  );
};

export default UpdateUserInfo;