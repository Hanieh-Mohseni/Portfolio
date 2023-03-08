

import React from 'react'
import { ProjectsStyles } from './ProjectsStyles'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import projects from '../../../src/assets/data/projectsData';
import ProjectCard from '../project-card/ProjectCard';
import {useScroll} from '../../hooks/useScrooll'
import {motion} from 'framer-motion'
import {scrollReveal} from '../../animations'

SwiperCore.use([Navigation]);
const ProjectList = () => { 
    const [element,controls] = useScroll(0.4)
    return (
        <ProjectsStyles 
            className='section' 
            id='projects'
        >
            <motion.div
                ref={element}
                variants={scrollReveal}
                initial='hidden'
                animate={controls}
            >
                <div className="content-slider">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            breakpoints={{
                            // when window width is >= 640px
                            620: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            668: {
                                slidesPerView: 2,
                            },
                            // when window width is >= 1200px
                            1200: {
                                slidesPerView: 3,
                            },
                            }}
                        >
                            {projects.map((project, index) => {
                            if (index >= 7) return null;
                            return (
                                <SwiperSlide key={project.id}>
                                    <ProjectCard 
                                        title={project.name} 
                                        desc={project.desc}
                                        img={project.ss} 
                                        stack={project.stackUsed}   
                                        source={project.source}
                                        live={project.live}
                                    />
                                </SwiperSlide>
                            );
                            })}
                        </Swiper>

                  
                </div>
            </motion.div>
        </ProjectsStyles>
    )
}

export default ProjectList
