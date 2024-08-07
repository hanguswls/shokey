import React from 'react';
import { Link } from 'react-router-dom';
import useMyUserInfo from '../hooks/useMyUserInfo';
import './UserInfo.css';

const ViewMyUserInfo = () => {
  const { myUserInfo, handleDeleteUserInfo } = useMyUserInfo();

  return (
    <div className="user-info-container">
      <h2 className="title">내 정보 조회</h2>
      <div className="fields">
        <div className="field">
          <span className="field-name">아이디</span>
          <span className="field-value">{myUserInfo.userId}</span>
        </div>
        <div className="field">
          <span className="field-name">이름</span>
          <span className="field-value">{myUserInfo.userName}</span>
        </div>
        <div className="field">
          <span className="field-name">성별</span>
          <span className="field-value">{myUserInfo.userGender ? '남성' : '여성'}</span>
        </div>
        <div className="field">
          <span className="field-name">이메일</span>
          <span className="field-value">{myUserInfo.userEmail}</span>
        </div>
        <div className="field">
          <span className="field-name">인플루언서 여부</span>
          <span className="field-value">{myUserInfo.userRole ? '인플루언서' : '일반 사용자'}</span>
        </div>
      </div>
      <div className="buttons">
        <Link to={`/update-user-info`} className="update-button">수정하기</Link>
        <button onClick={handleDeleteUserInfo} className="delete-button">탈퇴하기</button>
      </div>
    </div>
  );
};

export default ViewMyUserInfo;