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
              <div className="user-menu">
                <span id="mypage">{user.userName}님</span>
                <div className="user-menu-options">
                  <span onClick={() => navigate('/mypage')}>마이페이지</span>
                  <span onClick={() => navigate('/my-influencer')}>인플루언서 페이지</span>
                  <span onClick={() => navigate('/advertiser')}>광고주 페이지</span>
                </div>
              </div>
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