import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className={`navbar`}>
          <img
            src={require("../assets/logo_white.png")}
            alt="Little Lemon logo"
            class="nav-logo"
          />
            <Link class="hover-effect" to="/">
                <h1>Home</h1>
            </Link>
            <Link class="hover-effect" to="/about">
                <h1>About</h1>
        </Link>
        <Link class="hover-effect" to="/menu">
            <h1>Menu</h1>
        </Link>
        <Link class="hover-effect" to="/reservations">
            <h1>Reservations</h1>
        </Link>
        <Link class="hover-effect" to="/order">
            <h1>Order</h1>
        </Link>
        <Link class="hover-effect" to="/login">
            <h1>Login</h1>
        </Link>
      </nav>);
  }

  export default Nav;