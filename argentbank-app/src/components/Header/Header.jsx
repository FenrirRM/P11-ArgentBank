import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img src="/assets/argentBankLogo.png" alt="ArgentBank Logo" className="main-nav-logo-image"/>
        </Link>
        <Link to="/Login" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </nav>
    </header>
  );
}

export default Header;
