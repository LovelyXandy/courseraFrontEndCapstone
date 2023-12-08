import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-area">
      <img className="footer-logo" src={require("../assets/logo_footer_white.png")} alt="logo-footer"></img>
      <div className="footer-nav">
        <p className="footer-nav-title"> Navigation</p>
        <Link className="footer-nav-item" to="/">Home</Link>
        <Link className="footer-nav-item" to="/about">About</Link>
        <Link className="footer-nav-item" to="/menu">Menu</Link>
        <Link className="footer-nav-item" to="/reservations">Reservations</Link>
        <Link className="footer-nav-item" to="/order-online">Order Online</Link>
        <Link className="footer-nav-item" to="/login">Login</Link>
      </div>
      <div className="footer-contact">
        <p className="footer-contact-title">Contact</p>
        <p className="footer-contact-item"> 123456 Made up Avenue</p>
        <p className="footer-contact-item"> (0)123-456-7890</p>
        <p className="footer-contact-item"> info@little-lemon.com</p>
      </div>
      <div className="footer-social">
        <p className="footer-social-title">Social Media</p>
        <a className="footer-social-item" href="https://www.facebook.com">Facebook</a>
        <a className="footer-social-item" href="https://www.instagram.com">Instagram</a>
        <a className="footer-social-item" href="https://www.twitter.com">Twitter</a>
      </div>
    </div>
  </footer>
  );
}

export default Footer;