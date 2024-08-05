import { useNavigate } from 'react-router-dom';
import './Header.css';
import Navbar from "./Navbar";
import logo from '/logo.png';

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <section className="header-inner">
        <span className="logo">
          <img src={logo} alt="logo" />
          SHOKEY
        </span>
        <Navbar />
        <div className="button-container">
          <button id="login-btn" onClick={() => { navigate('/login') }}>
            Login
          </button>
          <button id="sign-up-btn" onClick={() => { navigate('/register') }}>
            Sign up
          </button>
        </div>
      </section>
    </header>
  )
}

export default Header;