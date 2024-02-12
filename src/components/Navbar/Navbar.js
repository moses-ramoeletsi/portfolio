import React, { useState } from "react";
import "./Navbar.css";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const Navbar =() => {

  const [opneMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!opneMenu);
  }
  return (
    <>
    <MobileNavbar isOpen={opneMenu} toggleMenu={toggleMenu}/>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="./assets/images/logo.png" alt="" />

          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Skills</a>
            </li>

            <li>
              <a className="menu-item">Work Exerience</a>
            </li>

            <li>
              <a className="menu-item">Contact Me</a>
            </li>

            <button className="contact-button" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
            <button className="menu-button" onClick={toggleMenu}>
    
            <span
                className={"material-symbols-outlined"}
                style={{ fontSize: "1.5rem" }}
            >
              {opneMenu ?"close" : "menu"}
            </span>
            </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
