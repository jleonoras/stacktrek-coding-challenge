import "./TopBar.css";
import { NavLink, Link } from "react-router-dom";

function TopBar() {
  return (
    // <div className="topnav">
    //   <NavLink to="/" end>
    //     Home
    //   </NavLink>
    //   <NavLink to="/movies">Movies</NavLink>
    //   <NavLink to="/memes">Memes</NavLink>
    //   <NavLink to="/about">About</NavLink>
    // </div>
    <nav className="navbar navbar-expand-md navbar-dark bg-black sticky-top">
      <div className="container" id="topnav">
        <Link className="navbar-brand" to="/">
          <img
            className="d-inline-block align-top"
            src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"
            alt=""
            width="37"
            height="30"
          ></img>
          Brand Logo
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
