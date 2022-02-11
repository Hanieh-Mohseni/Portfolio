import React from "react";
import "./sideBar.scss";
import { useState } from "react";

const SideBar = () => {

  


  return (
    <div className="sidebar">
      <span className="Lbar"></span>
      <div className="LbarItems">
        <div className= "item">
          <span className="icon">
            <i class="fas fa-graduation-cap"></i>
          </span>
          <a href="#resumeEducation">Education</a>
        </div>
        <div className="item">
          <span className="icon">
            <i class="fas fa-history"></i>
          </span>
          <a href="#resumeExperience">Experiance</a>
        </div>
        <div className="item">
          <span className="icon">
            <i class="fas fa-tools"></i>
          </span>
          <a href="#skills">Skills</a>
        </div>
        <div className="item">
          <span className="icon">
            <i class="fas fa-id-badge"></i>
          </span>
          <a href="#resumeCertificate">Certifications</a>
        </div>
        <div className="item">
          <span className="icon">
          <i class="fa-solid fa-earth-americas"></i>
          </span>
          <a href="#languages">Languages</a>
        </div>
      </div>

      {/* <span className="Rbar"></span> */}
    </div>
  );
};

export default SideBar;
