import React from 'react'
import {ProjectCardStyles } from './ProjectCardStyles'
import {MdLanguage} from 'react-icons/md'
import {AiFillGithub} from 'react-icons/ai'


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
                    <a href={live}><span ><MdLanguage />Live</span></a>
                    <a href={source}> <span ><AiFillGithub /> Source</span></a>
                </div>
            </div>
        </ProjectCardStyles>
    )
}

export default ProjectCard
