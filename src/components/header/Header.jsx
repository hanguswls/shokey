import { useNavigate } from 'react-router-dom';
import './Header.css';
import Navbar from "./Navbar";
import logo from '/logo.png';
import useLogout from '../../hooks/useLogout';
import useUserStore from '../../store/useUserStore';

function Header() {
  const navigate = useNavigate();
  const handleLogout = useLogout();
  const { user } = useUserStore();

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
              <button id="logout-btn" onClick={handleLogout}>
                Logout
              </button>
              <button id="mypage-btn" onClick={() => {navigate(`/mypage`)}}>
                {user.userName}님
              </button>
            </>
          ) : (
            <>
              <button id="login-btn" onClick={() => { navigate('/login') }}>
                Login
              </button>
              <button id="sign-up-btn" onClick={() => { navigate('/register') }}>
                Sign up
              </button>
            </>
          )}
        </div>
      </section>
    </header>
  )
}

export default Header;