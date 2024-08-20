import "./Footer.css";
import logo from "/logo.png";
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <section className="footer-top">
          <div className="logo">
            <img src={logo} alt="logo" />
            <span>
              SHOKEY
            </span>
          </div>
          <span id="shokey-description">
            Join millions of people who organize work and life with SHOKEY.
          </span>
        </section>
        <hr />
        <section className="footer-bottom">
          <span id="copyright">
            © SHOKEY - Design by Hoang Kim Quoc
          </span>
          <Link id="terms" to="/terms">
            약관
          </Link>
        </section>
      </div>
    </footer>
  );
}
