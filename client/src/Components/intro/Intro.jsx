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
             
             {/* <div className="itemContainer">
            <div className="icon">
              <a href="https://github.com/Hanieh-Mohseni">
              <i class="fab fa-github"></i>
              </a>
            </div>
            <div className="icon">
              <a href="https://www.linkedin.com/in/haniehmohseni/">
              <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
            <div className="icon">
              <a href="https://www.youtube.com/channel/UCre2tSLgggTKcRrIOINw0OQ">
              <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>  */}
             
             <h2>Hello, I'm</h2>
             <h1>Hanieh Mohseni</h1>
             <div className="typicalText">
               <h4>Full-stack <span> Web Developer</span></h4>
               <h4>Greater Montreal Metropolitan Area</h4>


          <span className="skills">
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
