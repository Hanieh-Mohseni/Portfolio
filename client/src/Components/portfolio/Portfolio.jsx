import React from "react";
import "./portfolio.scss";
import ResumeSections from "./resume/resumeSections/ResumeSections";
import SideBar from "./resume/sideBar/SideBar";
import TopSection from "./resume/top/TopSection";
import { useState } from "react";


const Portfolio = () => {

  
  return (
    <div className="portfolio" id="portfolio">
      <TopSection />

      <div className="leftRight">
       
          <SideBar />
          <ResumeSections />
             
      </div>
    </div>
  );
};

export default Portfolio;
