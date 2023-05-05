import React, { useState } from "react";
import logo from "../images/MEFA_LOGO_plane.png";
import Burgermenu from "./BurgerMenu.js";
import { Link } from "react-router-dom";
 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className=" App-header site-nav">
      <div className="container">
        <div className="menu-bg-wrap">
          <div className="site-navigation">
            <a href="index.html" className="logo m-0 float-start">
              <img src={logo} alt=""></img>
            </a>

            <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-start">
              <li className="menu-item active">
                <a href="form">FORM</a>
              </li>
              <li>
                <a href="index.html">SEARCH</a>
              </li>
              <li>
                <a href="services.html">BUY</a>
              </li>
              <li>
                <a href="about.html">RENT</a>
              </li>
              <li>
                <a href="contact.html">FEATURED</a>
              </li>
              <li>
                {/* <a href="#" onClick={open}>
                  LOGIN
                </a> */}
                 <Link to="/login" className="nav-link">LOGIN</Link>
              </li>
            </ul>

            <Link
              to="/login"
              className="logo m-0 float-end d-none d-lg-inline-block"
            >
              FOR BUSINESSES
            </Link>

            <button
              className={`button-burger d-lg-none float-end ${
                isMenuOpen ? "show-menu" : ""
              }`}
              onClick={toggleMenu}
            >
              <span className="bar bar-1"></span>
              <span className="bar bar-2"></span>
              <span className="bar bar-3"></span>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen ? <Burgermenu /> : null}
      {/* {isPopupOpen ? <LoginPopup closePopup={close} /> : null} */}
    </nav>
  );
}

export default Navbar;
