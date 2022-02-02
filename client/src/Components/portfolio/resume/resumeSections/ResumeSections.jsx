import React from "react";
import "./resumeSections.scss";

import ResueExperience from "./resumeParts/resume-experiance/ResumeExperience";
import ResumeProjects from "./resumeParts/resume-projects/ResumeProjects";
import ResumeSkills from "./resumeParts/resume-skills/ResumeSkills";
import ResumeLanguages from "./resumeParts/resume-languages/ResumeLanguages";
import ResumeEducation from "./resumeParts/resume-education/ResumeEducation";

function ResumeSections() {
  return (
    <div className="resumeSections">
      <ResumeEducation />
      <ResueExperience />
      <ResumeProjects />
      <ResumeSkills />
      <ResumeLanguages />
    </div>
  );
}

export default ResumeSections;