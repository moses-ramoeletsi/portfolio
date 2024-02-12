import React from 'react'
import "./MobileNavbar.css"

const MobileNavbar = ({ isOpen, toggleMenu}) => {
  return (
    <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className='mobile-menu-container'>
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

            </div>
        </div>
    </>
  
    );
};

export default MobileNavbar