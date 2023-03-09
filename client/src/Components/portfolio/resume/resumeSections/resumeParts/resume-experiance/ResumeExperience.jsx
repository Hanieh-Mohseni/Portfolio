//

import React from 'react';
import "./resumeExperience.scss";
import styled from 'styled-components';

const ResumeExperience = () => {


    return <div className='resumeExperience' id='resumeExperience'>

        <h1>Experience</h1>

        <h2>Java Software Developer</h2>
        <h3>Wiley Edge | Oct 2022 - Present  </h3>
        <h3> Developed a broad set of technical skills including:
            | Design, develop, and test of Java-based full-stack applications
            | CRUD full-stack application with an agile approach
            | MVC design pattern, RESTful services
            | Java, SQL, Spring Boot, Maven, JDBC, Junit5, Spring MVC, MySQL, AWS, high-level financial concepts</h3>


        <h2>E-learning Developer </h2>
        <h3>Freelance | 2014 - 2020 </h3>

        <h2>Executive and Project Manager </h2>
        <h3>Ratin Rayvaran, Iran, Tehran | 2010 - 2012 </h3>

        <h2>E-Content Developer</h2>
        <h3>E-Learning Center, Iran University of Science and Technology, Tehran, Iran | 2007 - 2012 </h3>
        <h3>Produced more than ten Courseware projects</h3>

        <h2>Instructor </h2>
        <h3>University of Applied Science and Technology-Dehkhoda | 2007 - 2008 </h3>
        <h3>Courses Taught: </h3>
        <h3>Data Structures, Database, Systems Analysis and Design, Software Engineering, Operating Systems</h3>

    </div>;
}

const Myp = styled.p`
font-size: 14px;
`;

export default ResumeExperience;
