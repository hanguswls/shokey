import React from 'react';
import { useParams } from 'react-router-dom';
import useUser from '../hooks/useUser';
import './User.css';

const ViewUser = () => {
  const { id } = useParams();
  const { user } = useUser(id);

  return (
    <div className="user-container">
    <h2 className="title">사용자 정보 조회</h2>
    {(user.userName === '') ?
      <h2 id="no-user">사용자 정보 없음</h2> :
      <div className="fields">
        <div className="field">
          <span className="field-name">이름</span>
          <span className="field-value">
            {user.userName}
          </span>
        </div>
        <div className="field">
          <span className="field-name">성별</span>
          <span className="field-value">
            {user.userGender ? '남성' : '여성'}
          </span>
        </div>
        <div className="field">
          <span className="field-name">이메일</span>
          <span className="field-value">
            {user.userEmail}
          </span>
        </div>
      </div>
    }
    </div>
  );
};

export default ViewUser;