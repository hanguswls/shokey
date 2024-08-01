import './Register.css';

function Register() {
  return (
    <main className="register">
      <section className="register-wrapper">
        <h2>회원가입</h2>
        <section className="register-input-wrapper">
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <input type="password" placeholder="비밀번호 확인" />
          <input type="email" placeholder="이메일" />
          <select name="gender" id="gender">
            <option value="0" selected disabled>성별</option>
            <option value="true">남자</option>
            <option value="false">여자</option>
          </select>
        </section>
        <button className="register-submit-btn">제출하기</button>
      </section>
    </main>
  )
}

export default Register;