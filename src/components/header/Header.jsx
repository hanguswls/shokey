import { useNavigate } from 'react-router-dom';
import './Header.css';
import Navbar from "./Navbar";
import logo from '/logo.png';
import useLogout from '../../hooks/useLogout';
import useMyUser from '../../hooks/useMyUser';

function Header() {
  const navigate = useNavigate();
  const logout = useLogout();
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
              <span id="logout" onClick={logout}>
                Logout
              </span>
              <div className="user-menu">
                <span id="mypage">{user.userName}님</span>
                <div className="user-menu-options">
                  <span onClick={() => navigate('/mypage')}>My Page</span>
                  <span onClick={() => navigate('/my-influencer')}>Influencer</span>
                  <span onClick={() => navigate('/myposts')}>My Posts</span>
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