import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div className="container justify-content-center">
        <div className="" id="navbarNavAltMarkup">
          <div className="navbar-nav fs-3">
          <NavLink to="/" className="nav-link">
              Characters
            </NavLink>
            <NavLink to="/episodes" className="nav-link">
              Episode
            </NavLink>
            <NavLink className="nav-link" to="/location">
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
