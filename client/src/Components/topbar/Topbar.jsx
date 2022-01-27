import React from "react";
import "./topbar.scss";

const Topbar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={"topbar " + (menuOpen && "active") }>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Logo
          </a>
          <div className="itemContainer">
            <div className="icon">
              <a href="https://github.com/Hanieh-Mohseni">
                <i class="fab fa-github-square"></i>
              </a>
            </div>
            <div className="icon">
              <a href="https://www.linkedin.com/in/haniehmohseni/">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
            <div className="icon">
              <a href="https://www.youtube.com/channel/UCre2tSLgggTKcRrIOINw0OQ">
                <i class="fab fa-youtube-square"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
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
