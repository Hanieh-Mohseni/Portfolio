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
              Software Engineer | <span> Full Stack Web Developer </span>|
              E-content Developer
            </h4>
            <h4>Greater Montreal Metropolitan Area</h4>

            <span className="Myskills">
              <h4>
                <Typical
                  loop={Infinity}
                  steps={[
                    "React.js, Node.js, MongoDB, Rest APIs, GitHub",
                    1000,
                    "2021 Graduate",
                    1000,
                  ]}
                />
              </h4>
            </span>
            <div className="About">
              About Me
            </div>
            <div className="Discrip">
            <h6>
            Graduated from the University of Concordia in Full Stack Web
              development
            </h6>

            <h6> Bachelor degree in Computer Engineering (BEng) </h6>
            <h6> Skilled in software development languages including C/C++</h6>
            <h6> 8+ experience in the E-learning industry </h6>
            <h6>
               Hands-on working experience with a variety of E-content
              development software
            </h6>
            <h6> Strong background in graphic and web design</h6>
            <h6>
               Creative, detail-oriented, and skilled at meeting deadlines
            </h6>
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
