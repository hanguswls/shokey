import useRegister from '../hooks/useRegister';
import './Register.css';

function Register() {
  const {
    handleIdChange,
    handlePwChange,
    handlePwConfirmChange,
    handleNameChange,
    handleGenderChange,
    handleEmailChange,
    handleSubmit
  } = useRegister();

  return (
    <main className="register">
      <section className="register-wrapper">
        <h2>회원가입</h2>
        <section className="register-input-wrapper">
          <input type="text" placeholder="아이디" onChange={handleIdChange} />
          <input type="password" placeholder="비밀번호" onChange={handlePwChange} />
          <input type="password" placeholder="비밀번호 확인" onChange={handlePwConfirmChange} />
          <input type="email" placeholder="이메일" onChange={handleEmailChange} />
          <input type="text" placeholder="별명" onChange={handleNameChange} />
          <select name="gender" id="gender" onChange={handleGenderChange}>
            <option value="0" selected={true} disabled>성별</option>
            <option value="true">남자</option>
            <option value="false">여자</option>
          </select>
        </section>
        <button className="register-submit-btn" onClick={handleSubmit}>제출하기</button>
      </section>
    </main>
  )
}

export default Register;