import React from 'react';
import './intro.scss';

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
             <h2>Hi There, I'm</h2>
             <h1>Hanih Mohseni</h1>
             <h3>Full-Stack Web Developer</h3>
           </div>

         </div>
       </div>
  )
}

export default Intro;
