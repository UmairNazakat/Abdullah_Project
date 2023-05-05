import React from "react";
import m_logo from "../images/M_LOGO_plane.png";
import { Link } from "react-router-dom";
import usePopup from "../Hooks/usePopup.js";
import LoginPopup from "./LoginPopup.js";

function Burgermenu() {
  const { isPopupOpen, open, close } = usePopup();
  return (
    <div className="show-menu">
      <nav className="main-navigation">
        <div className="menu-wrapper">
          <div className="menu-bg-wrap">
            <ul className="menu">
            <li className="menu-item active">
                <a href="#form">FORM</a>
              </li>
              <li className="menu-item">
                <a href="#about">SEARCH</a>
              </li>
              <li className="menu-item">
                <a href="#blog">BUY</a>
              </li>
              <li className="menu-item">
                <a href="#contact">RENT</a>
              </li>
              <li className="menu-item">
                <a href="#about">FEATURED</a>
              </li>
              <li className="menu-item">
                <a href="/" onClick={open}>
                  LOGIN
                </a>
              </li>
              <li className="menu-item">
                <Link to="/login" className="menu-item">
                  FOR BUSINESSES
                </Link>
              </li>
            </ul>
            <div className="menu-push"></div>
            <div className="menu-footer">
              <img src={m_logo} alt=""></img>
            </div>
          </div>
        </div>
      </nav>
      {isPopupOpen ? <LoginPopup closePopup={close} /> : null}
    </div>
  );
}

export default Burgermenu;
