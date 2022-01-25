import React from 'react';
import './topbar.scss';

const Topbar=()=> {
  return(
       <div className='topbar'>
         <div className="wrapper">
           <div className="left">
             <a href='#intro' className='logo'>Logo to go intro section</a>
             <div className='itemContainer'>
             <a href="https://github.com/Hanieh-Mohseni">
              <i class="fab fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/haniehmohseni/">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCre2tSLgggTKcRrIOINw0OQ">
              <i class="fab fa-youtube-square"></i>
            </a>
             </div>
           </div>
           <div className="right"></div>
         </div>

       </div>
  )
}

export default Topbar;
