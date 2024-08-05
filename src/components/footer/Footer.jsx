import './Footer.css';
import logo from '/logo.png';

export default function Footer() {
  return (
    <footer>
      <section className="footer-top">
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>
            SHOKEY
          </span>
        </div>
        <span id="shokey-description">
          광고주와 인플루언서의 연결 다리
        </span>
      </section>
      <hr />
      <section className="footer-bottom">
        <span id="copyright">
          © SHOKEY - Design by Hoang Kim Quoc
        </span>
        <a id="terms" href="/terms">
          약관
        </a>
      </section>
    </footer>
  )
}