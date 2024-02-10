import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { logout } from "../../redux/actions/auth.actions";

function Header() {
  const isConnected = useSelector((state) => state.auth.token);
  const username = useSelector((state) => state.user.userData.username);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <header>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            src="/assets/argentBankLogo.webp"
            alt="ArgentBank Logo"
            className="main-nav-logo-image"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {isConnected ? (
          <div className="container-user">
            <Link to="/Dashboard" className="container-user-Info">
              <i className="fa fa-user-circle" />
              <p>{username}</p>
            </Link>
            <Link to="/" onClick={logoutHandler} className="main-nav-item">
              <i className="fa fa-sign-out" />
              <p>Sign Out</p>
            </Link>
          </div>
        ) : (
          <Link to="/Login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            <p>Sign In</p>
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
