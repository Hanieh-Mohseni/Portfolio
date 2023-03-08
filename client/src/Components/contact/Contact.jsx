import React from 'react';
import "./contact.css";
import { useState } from 'react';



  const Contact=()=> {
    
    const [status, setStatus] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
      setStatus("Sending...");
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      alert(result.status);
    };
    return (
      <div className="contact" id="contact">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info">
              <div className="c-info-item">
                <div className="c-icon">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                Mohseni.Hanieh@gmail.com
              </div>
              <div className="c-info-item">
                <div className="c-icon">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                Montreal, QC
              </div>
            </div>
          </div>
  
          <div className="c-right">
            <p className="c-desc">
              <b>If you've got a project in mind</b>,why not get in touch. Always
              available for freelancing, let's work together!
            </p>
  
            {/* ============================================================================= */}
  
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" required />
              </div>
              <button type="submit">{status}</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  

export default Contact