import React from 'react';
import "./works.scss";
import ProjectList from '../projectList/ProjectList';
import { useState } from 'react';

const Works=()=> {

  const list=[
    {
      id:"titr1",
      title:"titr1",
    },
      {
        id:"titr2",
        title:"titr2",
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

  return(
       <div className='works' id="works">
         <h1>Projects</h1>
           <ul>
             {list.map((item)=>(
               <ProjectList title={item.title} active={selected===item.id} setSelected={setSelected} id={item.id}/>
             ))}
            
            </ul>
            <div className="container">
              <div className="item">
                <img
                src= 'assets/Final-Project.png' alt=''/>
                <h3>Nations Recipe App</h3>
              </div>

              <div className="item">
                <img
                src= 'assets/Final-Project.png' alt=''/>
                <h3>Nations Recipe App</h3>
              </div>

              <div className="item">
                <img
                src= 'assets/Final-Project.png' alt=''/>
                <h3>Nations Recipe App</h3>
              </div>

              <div className="item">
                <img
                src= 'assets/Final-Project.png' alt=''/>
                <h3>Nations Recipe App</h3>
              </div>
              
            </div>

         
         
           
       </div>
  )
}

export default Works;
