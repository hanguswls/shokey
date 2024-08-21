import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUser from "../hooks/useUser";
import "./User.css";

const ViewUser = () => {
  const { id } = useParams();
  const { user } = useUser(id);
  const navigate = useNavigate();

  useEffect(() =>{
    alert('존재하지 않는 사용자입니다.');
    navigate('/');
  }, []);

  return (
    <div className="user-container">
      {user ? (
        <>
          <h2 className="user-title">사용자 정보</h2>
          <div className="user-fields">
            <div className="user-field">
              <span className="user-field-name">이름</span>
              <span className="user-field-value">{user?.userName}</span>
            </div>
            <div className="user-field">
              <span className="user-field-name">성별</span>
              <span className="user-field-value">
                {user?.userGender ? "남성" : "여성"}
              </span>
            </div>
            <div className="user-field">
              <span className="user-field-name">이메일</span>
              <span className="user-field-value">{user?.userEmail}</span>
            </div>
          </div>
        </>
      ) : (
        <div className="no-user">존재하지 않는 사용자입니다.</div>
      )}
    </div>
  );
};

export default ViewUser;