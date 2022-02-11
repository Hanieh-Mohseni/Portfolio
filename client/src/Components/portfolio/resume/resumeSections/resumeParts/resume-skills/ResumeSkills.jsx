import React from "react";
import SkillsList from "../skillsList/SkillsList";
import "./resumeSkills.scss"
import { useState } from "react";
import { useEffect } from "react";
import {WebDevelopment,ElearningAndMultimedia,SoftwareDevelopment,Other} from '../../../../../../data'



const ResumeSkills = () => {
  const [selected, setSelected]=useState("WebDevelopment");
  const [data, setData]=useState([]);

  const list=[
    {
      id:"WebDevelopment",
      title:"Web Development",
    },
      {
        id:"SoftwareDevelopment",
        title:"Software Development",
      },
      {
        id:"ElearningAndMultimedia",
        title:"E-learning And Multimedia",
      },
      {
        id:"Other",
        title:"Other",
      },
      
   ];


  useEffect(()=>{
    switch(selected){
      case "WebDevelopment":
      setData(WebDevelopment);
      break;
      case "SoftwareDevelopment":
      setData(SoftwareDevelopment);
      break;
      case "ElearningAndMultimedia":
      setData(ElearningAndMultimedia);
      break;
      case "Other":
      setData(Other);
      break;
     
    } 

  },[selected]);

  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <ul>
      {list.map((item)=>(
               <SkillsList title={item.title} active={selected===item.id} setSelected={setSelected} id={item.id}/>
             ))}
      </ul>
      <div className="skilscontainer">
      {data.map((d)=>(
              <div className="item">
                
                {/* <i class="fa-solid fa-circle-chevron-right"></i> */}
                <h2>{d.title1}</h2>
                <h3>{d.subtitle1}</h3>
                <h2>{d.title2}</h2>
                <h3>{d.subtitle2}</h3>
                <h2>{d.title3}</h2>
                <h3>{d.subtitle3}</h3>
                <h2>{d.title4}</h2>
                <h3>{d.subtitle4}</h3>
                <h2>{d.title5}</h2>
                <h3>{d.subtitle5}</h3>
                <h2>{d.title6}</h2>
                <h3>{d.subtitle6}</h3>
              </div>
              ))}
      </div>

    </div>
  );
};

export default ResumeSkills;
