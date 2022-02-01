import React from "react";
import "./portfolio.scss";

import ResueExperience from "./resume/resume-experiance/ResumeExperience"
import ResumeProjects from "./resume/resume-projects/ResumeProjects"
import ResumeSkills from "./resume/resume-skills/ResumeSkills"
import ResumeLanguages from "./resume/resume-languages/ResumeLanguages"
import SideBar from "./resume/sideBar/SideBar"
import ResumeEducation from "./resume/resume-education/ResumeEducation";
import TopSection from "./resume/top/TopSection";
const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      
     <div topSection>
       <TopSection/>
     </div>
     <div className="leftRight" id="leftRight">
      <div className="sideBar">
        <SideBar/>
      </div>
      <div className="resumeSection">

        <ResumeEducation/>
        <ResueExperience/>
        <ResumeProjects/>
        <ResumeSkills/>
        <ResumeLanguages/>
           
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
