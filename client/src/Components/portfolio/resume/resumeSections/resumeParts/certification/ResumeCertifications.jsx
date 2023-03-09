import React from "react";
import './resumeCertifications.scss';
import styled from "styled-components";

const ResumeCertifications = () => {
  return (
    <div className="resumeCertifications" id="resumeCertificate">

       <h1>Certifications</h1>

       <Mya href="https://www.credly.com/badges/8ed71f60-53c9-4343-9d6c-263865f589a4/public_url"><h2> JAVA LEVEL 4 - FULL STACK DEVELOPMENT, Dec 2022</h2></Mya>
      <h3>Wiley Edge</h3>
      

      <Mya href="https://www.credly.com/badges/e360f396-f935-4c35-a391-ca7c956394e9/public_url"><h2> AWS CLOUD PRACTITIONER, Dec 2022</h2></Mya>
      <h3>Wiley Edge</h3>

      <Mya href="https://www.credly.com/badges/21c6ea15-f644-476c-bfa6-583769e11870/public_url"><h2> FINANCIAL FOUNDATIONS, Dec 2022</h2></Mya>
      <h3>Wiley Edge</h3>

      <h2> Full Stack Web Development Diploma, Dec 2021</h2>
      <h3>Concordia University</h3>




      <h2> langue française - FIA330-4AD, Jul 2021</h2>
      <h3>
        Ministère de l'Immigration, de la Francisation et de l'Intégration
      </h3>
    </div>
  );
};

const Mya=styled.a`
  
color: black;
`;

export default ResumeCertifications;
