import React from 'react';
import "./works.scss";
import ProjectList from '../projectList/ProjectList';
import { useState, useEffect } from 'react';
import {webAppsProjects,ElearningProjects} from '../../data';

const Works=()=> {

  const list=[
    {
      id:"WebApps",
      title:"WebApps",
    },
      {
        id:"Elearning Projects",
        title:"Elearning Projects",
      },
      {
        id:"titr3",
        title:"titr3",
      },
      {
        id:"titr4",
        title:"titr4",
      },
      {
        id:"titr5",
        title:"titr5",
      },
   ];


   const [selected, setSelected]=useState("titr1");
   const [data, setData]=useState([]);

   useEffect(()=>{
     switch(selected){
       case "WebApps":
       setData(webAppsProjects);
       break;
       case "Elearning Projects":
       setData(ElearningProjects);
       break;
       default:
         setData(webAppsProjects);
     } 

   },[selected]);

  return(
       <div className='works' id="works">
         <h1>Projects</h1>
           <ul>
             {list.map((item)=>(
               <ProjectList title={item.title} active={selected===item.id} setSelected={setSelected} id={item.id}/>
             ))}
            
            </ul>
            <div className="container">
              {data.map((d)=>(
              <div className="item">
                <img
                src= {d.img}
                 alt=''/>
                <h3>{d.title}</h3>
              </div>
              ))}
 
              
            </div>

         
         
           
       </div>
  )
}

export default Works;
