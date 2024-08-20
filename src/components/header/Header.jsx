import { useNavigate } from 'react-router-dom';
import './Header.css';
import Navbar from "./Navbar";
import logo from '/logo.png';
import useLogout from '../../hooks/useLogout';
import useMyUser from '../../hooks/useMyUser';

function Header() {
  const navigate = useNavigate();
  const handleLogout = useLogout();
  const { user } = useMyUser();

  return (
    <header>
      <section className="header-inner">
        <span className="logo">
          <img src={logo} alt="logo" />
          SHOKEY
        </span>
        <Navbar />
        <div className="button-container">
        { user ? (
            <>
              <span id="logout" onClick={handleLogout}>
                Logout
              </span>
              <span id="mypage" onClick={() => {navigate(`/mypage`)}}>
                {user.userName}님
              </span>
            </>
          ) : (
            <>
              <span id="login" onClick={() => { navigate('/login') }}>
                Login
              </span>
              <span id="sign-up" onClick={() => { navigate('/register') }}>
                Sign up
              </span>
            </>
          )}
        </div>
      </section>
    </header>
  )
}

export default Header;