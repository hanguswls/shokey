import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUser from "../hooks/useUser";
import "./User.css";
import Field from "../components/field/Field";

const ViewUser = () => {
  const { id } = useParams();
  const { user } = useUser(id);

  return (
    <div className="user-container">
      {user ? (
        <>
          <h2 className="user-title">사용자 정보</h2>
          <div className="fields">
            <Field label="이름" value={user?.userName || ''} />
            <Field label="성별" value={user?.userGender ? "남성" : "여성"} />
            <Field label="이메일" value={user?.userEmail || ''} />
          </div>
        </>
      ) : (
        <div className="no-user">존재하지 않는 사용자입니다.</div>
      )}
    </div>
  );
};

export default ViewUser;