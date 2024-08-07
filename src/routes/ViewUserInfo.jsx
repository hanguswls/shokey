import React from 'react';
import { useParams } from 'react-router-dom';
import useUserInfo from '../hooks/useUserInfo';
import './UserInfo.css';

const ViewUserInfo = () => {
  const { id } = useParams();
  const { userInfo } = useUserInfo(id);

  return (
    <div className="user-info-container">
    <h2 className="title">사용자 정보 조회</h2>
    {(userInfo.userName === '') ?
      <h2 id="no-user-info">사용자 정보 없음</h2> :
      <div className="fields">
        <div className="field">
          <span className="field-name">이름</span>
          <span className="field-value">
            {userInfo.userName}
          </span>
        </div>
        <div className="field">
          <span className="field-name">성별</span>
          <span className="field-value">
            {userInfo.userGender ? '남성' : '여성'}
          </span>
        </div>
        <div className="field">
          <span className="field-name">이메일</span>
          <span className="field-value">
            {userInfo.userEmail}
          </span>
        </div>
      </div>
    }
    </div>
  );
};

export default ViewUserInfo;