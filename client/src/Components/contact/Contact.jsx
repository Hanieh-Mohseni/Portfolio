import React from 'react';
import "./contact.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser' ;



  const Contact=()=> {
    
   const msg='Your message has been sent' ;
  const handleSubmit = (e)=>{
    e.preventDefault();
  
  }

  return (
    <div className='contact' id="contact">
    <div className="c-bg"></div>
    <div className="c-wrapper">
      <div className="c-left">
        <h1 className="c-title">Let's discuss your project</h1>
        <div className="c-info">
          <div className="c-info-item">
          <div className='c-icon'>
          <i class="fa-solid fa-envelope"></i>
          </div>
          Mohseni.Hanieh@gmail.com
          </div>
          <div className="c-info-item">
            <div className='c-icon'>
          <i class="fa-solid fa-location-dot"></i>
          </div>
          Brossard, QC
          </div>
         
        </div>
      </div>
      <div className="c-right">
        <p className='c-desc'>
          <b>If you've got a project in mind</b>,why not get in touch. Always available for freelancing, let's work together!
        </p>
       
        <form method='post' action='send'>
          <input type="text" placeholder='Name' name='user_name'/>
          <input type="text" placeholder='Subject' name='user_subject'/>
          <input type="text" placeholder='Email' name='user_email'/>
          <textarea rows="5" cols="50" placeholder='Message' name="message"/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact