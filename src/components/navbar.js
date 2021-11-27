import React from "react";
import Logo from "../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="space logo" className="img-logo" />
      </div>

      <span className="spl-line"></span>

      <nav className="menu-bar menu-container">
        <ul className="unordered-menu">
          <NavLink to="/" className="nav-item">
            <span className="index">00</span>
            <span className="menu-item">Home</span>
          </NavLink>

          <NavLink to="/destination" className="nav-item">
            <span className="index">01</span>
            <span className="menu-item">Destination</span>
          </NavLink>
          <NavLink to="/crew" className="nav-item ">
            <span className="index">02</span>
            <span className="menu-item">Crew</span>
          </NavLink>
          <NavLink to="/technology" className="nav-item ">
            <span className="index">03</span>
            <span className="menu-item">Technology</span>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
