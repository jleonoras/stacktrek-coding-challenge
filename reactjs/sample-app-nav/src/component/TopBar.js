import "./TopBar.css";
import { NavLink, Link } from "react-router-dom";

function TopBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-black fixed-top">
      <div className="container" id="topnav">
        <Link className="navbar-brand container-inline" to="/">
          <img
            className="d-inline-block align-top"
            src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
            alt=""
            width="35"
            height="30"
            loading="lazy"
            id="brandLogo"
          ></img>
          <i className="fa-solid fa-chevron-left"></i>
          John Leonoras /<i className="fa-duotone fa-slash-forward"></i>
          <i className="fa-solid fa-chevron-right"></i>
        </Link>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          type="button"
          aria-controls="nav"
          aria-label="Expand Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse justify-content-end" id="nav">
          <ul className="navbar-nav nav-pills">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies" className="nav-link">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/memes" className="nav-link">
                Memes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
