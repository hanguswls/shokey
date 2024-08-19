import React from 'react';
import { Link } from 'react-router-dom';
import useMyUser from '../hooks/useMyUser';
import './User.css';

const ViewMyUser = () => {
  const { user, handleDeleteUser } = useMyUser();

  return (
    <div className="user-container">
      <h2 className="user-title">사용자 정보</h2>
      <div className="user-fields">
        <div className="user-field">
          <span className="user-field-name">아이디</span>
          <span className="user-field-value">{user.userId}</span>
        </div>
        <div className="user-field">
          <span className="user-field-name">이름</span>
          <span className="user-field-value">{user.userName}</span>
        </div>
        <div className="user-field">
          <span className="user-field-name">성별</span>
          <span className="user-field-value">{user.userGender ? '남성' : '여성'}</span>
        </div>
        <div className="user-field">
          <span className="user-field-name">이메일</span>
          <span className="user-field-value">{user.userEmail}</span>
        </div>
        <div className="user-field">
          <span className="user-field-name">인플루언서 여부</span>
          <span className="user-field-value">{user.userRole ? '인플루언서' : '일반 사용자'}</span>
        </div>
      </div>
      <div className="buttons">
        <Link to={`/update-user`} className="update-button">수정하기</Link>
        <button onClick={handleDeleteUser} className="delete-button">탈퇴하기</button>
      </div>
    </div>
  );
};

export default ViewMyUser;