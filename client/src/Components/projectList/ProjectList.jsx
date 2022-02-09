import React from 'react';
import "./projectList.scss"

const ProjectList=({id,title,active,setSelected})=> {
  return <div>
      <li className={active ? "projectList active" : "projectList"} onClick={()=>setSelected(id)}>
          {title}
      </li>
  
  </div>;
}

export default ProjectList;
