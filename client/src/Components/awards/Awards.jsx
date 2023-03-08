import React from "react";
import { motion } from "framer-motion";
import { fade, lineAnim, pageAnimation, textReveal } from "../../animations";
import { AwardsStyles } from "./awards.styles";
import { Hide } from "../Hero/hero.styles";
import { useScroll } from "../../hooks/useScrooll";

const Awards = () => {
  const [element, controls] = useScroll(0.5);
  return (
    <AwardsStyles
      className="section"
      id="Awards"
      variants={pageAnimation}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <h1>Honors and Awards </h1>
      <div className="content">
        <div className="left">
          <div className="intro">
            <div className="title" variants={textReveal}>
              <motion.div className="line" variants={lineAnim}></motion.div>
              <p className="sub-head">
                Winner of Gold Medal, National Chess Championship
              </p>
            </div>
            <Hide>
              <motion.h5 variants={textReveal}>
                Issued by Chess Board of Tehran, Iran{" "}
                Competitions between students of all the universities.{" "}
              </motion.h5>
            </Hide>
          </div>

          <div className="intro">
            <div className="title" variants={textReveal}>
              <motion.div className="line" variants={lineAnim}></motion.div>
              <p className="sub-head">
              Winner of Silver Medal, Provincial Student Chess Tournament
              </p>
            </div>
            <Hide>
              <motion.h5 variants={textReveal}>
              Issued by Chess Board of Isfahan, Iran{" "}
              Between students of all the universities of Isfahan province. Iran, Kashan
              </motion.h5>
            </Hide>
          </div>

          <div className="intro">
            <div className="title" variants={textReveal}>
              <motion.div className="line" variants={lineAnim}></motion.div>
              <p className="sub-head">
              Winner of Silver Medal, Provincial Student Chess Tournament</p>
            </div>
            <Hide>
              <motion.h5 variants={textReveal}>
              Issued by West Azerbaijan Education Organization{" "}
              Between students of all the schools of West Azerbaijan, Iran, Urmia
              </motion.h5>
            </Hide>
          </div>
          {/* <div className="skills"> */}
          {/* <div className="title">
                            <motion.div className="line" variants={lineAnim}></motion.div>
                            <p className="sub-head">Skills & Tools</p>
                        </div> */}
          {/* <Hide><motion.p variants={textReveal}>Design: Figma</motion.p></Hide>
                        <Hide><motion.p variants={textReveal}>Developement: Javascript, React, Redux, HTML, CSS/SCSS, Firebase</motion.p></Hide> */}
          {/* </div> */}
          {/* <motion.button variants={fade}>Get in Touch</motion.button> */}
        </div>
        <div className="right"></div>
      </div>
    </AwardsStyles>
  );
};

export default Awards;
