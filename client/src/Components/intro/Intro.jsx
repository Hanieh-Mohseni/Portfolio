import React from "react";
import "./intro.scss";
import Typical from "react-typical";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Myphoto1.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          {/* <h2>Hello, I'm</h2> */}
          <h1>Hanieh Mohseni</h1>
          <div className="typicalText">
            <h4>
            Software Engineer | <span> Full-Stack Java Developer </span>|
            Software Developer
            </h4>
            <h4>Greater Montreal Metropolitan Area</h4>

            <span className="Myskills">
              <h4>
                <Typical
                  loop={Infinity}
                  steps={[
                    "About Me",
                    500,
                    "About Me",
                    500,
                  ]}
                />
              </h4>
            </span>
            <div className="About">
              About Me
            </div>
            <div className="Discrip">
            <h6>
            Bachelor's degree in Computer Engineering (BEng) 




            </h6>

            <h6> Graduated from the University of Concordia in Full Stack Web development</h6>
            <h6> Hands-on experience with a variety of programming languages and agile software development environments </h6>
            <h6> 8+ experience in the E-learning industry and working with a variety of E-content development software 
            </h6>
            <h6> Quick learner, detail-oriented, creative, and skilled at meeting deadlines</h6>
           
            </div>
          </div>
        </div>

        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
