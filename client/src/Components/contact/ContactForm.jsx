import React, { useState } from "react";
import "./contact.css";

const ContactForm = () => {
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
    <div className="Contact" id="contact">
        <div className="Content">
           <h2>Contact Me</h2>
           <p> Always available for freelancing, let's work together!</p>
        </div>
        <div className="Container">
            <div className="ContainerInfo">
                <div className="box">
                    <div className="Icon"> <i class="fa-solid fa-location-dot"></i></div>
                    <div className="text">
                        <h3>Address</h3>
                        <p>Montreal, QC</p>
                    </div>
                </div>

                <div className="box">
                    <div className="Icon"><i class="fa-solid fa-envelope"></i></div>
                    <div className="text">
                        <h3>Email</h3>
                        <p>Mohseni.Hanieh@gmail.com</p>
                    </div>
                </div>
            </div>
       
    
            

       <div className="contactForm">
          <form onSubmit={handleSubmit}>
              <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" id="name" required />
              <label htmlFor="name">Name</label>            </div>
            <div className="inputBox">
              <input type="email" id="email" required />
              <label htmlFor="email">Email</label>
            </div>
            <div className="inputBox">
              <textarea id="message" required />
              <label htmlFor="message">Type Your Message</label>
            </div>
            <button type="submit">{status}</button>
          </form>
          </div>
          </div>
       
     
    </div>
  );
};

export default ContactForm;
