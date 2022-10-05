import "./TopBar.css";
import { NavLink } from "react-router-dom";

function TopBar() {
  return (
    <div className="topnav">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/memes">Memes</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
}

export default TopBar;
