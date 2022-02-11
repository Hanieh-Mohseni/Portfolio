import React from 'react';
import './intro.scss';
import Typical from "react-typical" 

const Intro=()=> {
  return(
       <div className='intro' id="intro">
         <div className='left'>
           <div className='imgContainer'>
             <img src='assets/Myphoto.png' alt=''/>
           </div>
         </div>
         <div className='right'>
           <div className='wrapper'>
             
            <h2>Hello, I'm</h2>
             <h1>Hanieh Mohseni</h1>
             <div className="typicalText">
               <h4>Software Engineer | <span> Full Stack Web Developer </span>| E-content Developer</h4>
               <h4>Greater Montreal Metropolitan Area</h4>


          <span className="Myskills">
            <h4>
          <Typical
          loop={Infinity}
          steps={[
            "React.js, Node.js, MongoDB, Rest APIs, GitHub",
            1000,
            "2021 Graduate",
            1000,
        
          ]}
                    
          />
          </h4>

          </span>
          
        </div>
           </div>

           <a href='#portfolio'>
             <img src='assets/down.png' alt=''/> 
           </a>

         </div>
       </div>
  )
}

export default Intro;
