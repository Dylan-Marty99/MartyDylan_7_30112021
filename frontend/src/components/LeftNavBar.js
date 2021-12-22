import React from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="left-nav-container">
      <div className="icons">
        <NavLink to="/">
          <i className="fas fa-home"></i>
        </NavLink>
        <NavLink to="/profil">
          <i className="fas fa-user"></i>
        </NavLink>
      </div>
    </div>
  );
};

export default LeftNav;
