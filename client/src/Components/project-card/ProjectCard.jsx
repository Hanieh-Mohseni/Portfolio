import React from 'react'
import {ProjectCardStyles } from './ProjectCardStyles'
import {MdLanguage} from 'react-icons/md'
import {AiFillGithub} from 'react-icons/ai'
import styled from 'styled-components'


const ProjectCard = ({title,desc,img,stack,source,live}) => {

      return (
        <ProjectCardStyles>
                <div className="img-container">
                    <img src={img} alt="" />
                </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="tech-used">
                    {stack.map((el,index) => <span key={index}>{el}</span>)}
                </div>
                <div className="links">
                    <Mya href={live}><span ><MdLanguage />Live</span></Mya>
                    <Mya href={source}> <span ><AiFillGithub /> Source</span></Mya>
                </div>
            </div>
        </ProjectCardStyles>
    )
}
const Mya= styled.a`
 text-decoration: none;
 `;


export default ProjectCard
