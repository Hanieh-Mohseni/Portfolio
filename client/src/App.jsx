import React from 'react';
import Topbar from "./Components/topbar/Topbar";
import Intro from './Components/intro/Intro';
import Portfolio from "./Components/portfolio/Portfolio";
import Works from "./Components/works/Works";
import Awards from "./Components/awards/Awards";
// import Contact from "./Components/contact/Contact";
import "./app.scss" 
import { useState } from 'react';
import Menu from './Components/menu/Menu';
import ContactForm from './Components/contact/ContactForm';
import ProjectList from './Components/projectList/ProjectList';



const App=()=> {
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <ProjectList/>
        <Awards/>
        <ContactForm/>
      </div>
     </div>
  );
}

export default App;
