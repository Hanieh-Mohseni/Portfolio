import React from "react";
import "./sideBar.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <span className="Lbar"></span>
      <div className="LbarItems">
        <div className="item">
          <span className="icon">
            <i class="fas fa-graduation-cap"></i>
          </span>
          Education
        </div>
        <div className="item">
          <span className="icon">
            <i class="fas fa-history"></i>
          </span>
          Experiance
        </div>
        <div className="item">
          <span className="icon">
            <i class="fas fa-project-diagram"></i>
          </span>
          Projects
        </div>
        <div className="item">
          <span className="icon">
            <i class="fas fa-tools"></i>
          </span>
          Skills
        </div>
        <div className="item">
          <span className="icon">
            <i class="fas fa-id-badge"></i>
          </span>
          Certifications
        </div>
      </div>

      <span className="Rbar"></span>
    </div>
  );
};

export default SideBar;
