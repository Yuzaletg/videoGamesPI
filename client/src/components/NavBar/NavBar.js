import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div></div>
      <div></div>
      <div className="nav3">
        <div className="nav">
          <NavLink to="/">
            <button>Home</button>
          </NavLink>
          <NavLink to="/videogames">
            <button>Videogames</button>
          </NavLink>
          <NavLink to="/creatgame">
            <button>Add Games</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
