import React from "react";
import "./topbar.scss";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img src="assets/logo.png" alt="" />
          </a>
          <div className="itemContainer">
            <a href="https://github.com/Hanieh-Mohseni">
              <div className="icon">
                <i class="fab fa-github"></i>
              </div>
            </a>
          </div>

          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/haniehmohseni/">
              <div className="icon">
                <i class="fab fa-linkedin-in"></i>
              </div>
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://www.youtube.com/channel/UCre2tSLgggTKcRrIOINw0OQ">
              <div className="icon">
                <i class="fab fa-youtube"></i>
              </div>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
