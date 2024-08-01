import { useState } from "react";
import { postRegister } from "../apis/authApi";
import { useNavigate } from "react-router-dom";

function useRegister() {
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const [pwConfirm, setPwConfirm] = useState();
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();

  const handleIdChange = (e) => {
    setId(e.target.value);
  }
  const handlePwChange = (e) => {
    setPw(e.target.value);
  }
  const handlePwConfirmChange = (e) => {
    setPwConfirm(e.target.value);
  }
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleGenderChange = (e) => {
    setGender(Boolean(e.target.value));
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = async () => {
    if (!id) {
      alert('아이디를 입력해주세요.');
      return ;
    }
    if (!pw) {
      alert('비밀번호를 입력해주세요.'); 
      return ;
    }
    if (!(pwConfirm === pw)) {
      alert('비밀번호 확인이 동일하지 않습니다.'); 
      return ;
    }
    if (!name) {
      alert('이름을 입력해주세요.');
      return ;
    }
    if (!gender) {
      alert('성별을 선택해주세요.');
      return ;
    }
    if (!email) {
      alert('이메일을 입력해주세요.');
      return ;
    }

    postRegister(id, pw, name, gender, email)
    .then(() => {
      alert('가입완료');
      navigate('/login');
    })
    .catch((error) => {
      alert(error.message);
    })
  }

  return {
    handleIdChange,
    handlePwChange,
    handlePwConfirmChange,
    handleNameChange,
    handleGenderChange,
    handleEmailChange,
    handleSubmit
  }
}

export default useRegister;