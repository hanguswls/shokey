import { useState } from "react";

function useRegister() {
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const [pwConfirm, setPwConfirm] = useState();
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [term, setTerm] = useState();

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
    setGender(e.target.value);
  }
  const handleTermCheck = (e) => {
    setTerm(e.target.checked);
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
    if (!term) {
      alert('개인정보 이용 약관에 동의해주세요.');
      return ;
    }

    console.log('id: %s, pw: %s, name: %s, role: %s, term: %s', id, pw, name, role, term);
  }

  return {
    handleIdChange,
    handlePwChange,
    handlePwConfirmChange,
    handleNameChange,
    handleGenderChange,
    handleTermCheck,
    handleSubmit
  }
}

export default useRegister;