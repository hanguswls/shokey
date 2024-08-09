import React from 'react';
import { Link } from 'react-router-dom';
import useMyUser from '../hooks/useMyUser';
import './User.css';

const ViewMyUser = () => {
  const { myUser, handleDeleteUser } = useMyUser();

  return (
    <div className="user-container">
      <h2 className="title">내 정보 조회</h2>
      <div className="fields">
        <div className="field">
          <span className="field-name">아이디</span>
          <span className="field-value">{myUser.userId}</span>
        </div>
        <div className="field">
          <span className="field-name">이름</span>
          <span className="field-value">{myUser.userName}</span>
        </div>
        <div className="field">
          <span className="field-name">성별</span>
          <span className="field-value">{myUser.userGender ? '남성' : '여성'}</span>
        </div>
        <div className="field">
          <span className="field-name">이메일</span>
          <span className="field-value">{myUser.userEmail}</span>
        </div>
        <div className="field">
          <span className="field-name">인플루언서 여부</span>
          <span className="field-value">{myUser.userRole ? '인플루언서' : '일반 사용자'}</span>
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