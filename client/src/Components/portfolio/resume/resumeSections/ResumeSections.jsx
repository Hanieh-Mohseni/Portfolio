import React from "react";
import "./resumeSections.scss";

import ResueExperience from "./resumeParts/resume-experiance/ResumeExperience";
import ResumeSkills from "./resumeParts/resume-skills/ResumeSkills";
import ResumeLanguages from "./resumeParts/resume-languages/ResumeLanguages";
import ResumeEducation from "./resumeParts/resume-education/ResumeEducation";
import ResumeCertifications from "./resumeParts/certification/ResumeCertifications";
import Interest from "./resumeParts/resumeInterest/Interest";

function ResumeSections() {

   
  return (
    
    <div className="resumeSections">
     
      <ResumeEducation />
      <ResueExperience />
      <ResumeSkills />
      <ResumeLanguages />
      <ResumeCertifications />
      <Interest/>
      
    </div>
  );
}

export default ResumeSections;
