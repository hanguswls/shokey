import './Header.css';
import Navbar from "./Navbar";
import logo from '/public/logo.png';

function Header() {
  return (
    <header>
      <section className="header-inner">
        <span className="logo">
          <img src={logo} alt="logo" />
          SHOKEY
        </span>
        <Navbar />
        <div className="button-container">
          <button id="login-btn">
            Login
          </button>
          <button id="sign-up-btn">
            Sign up
          </button>
        </div>
      </section>
    </header>
  )
}

export default Header;