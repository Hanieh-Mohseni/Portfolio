import React from 'react';
import Topbar from "./Components/topbar/Topbar";
import Intro from './Components/intro/Intro';
import Portfolio from "./Components/portfolio/Portfolio";
import Works from "./Components/works/Works";
import Awards from "./Components/awards/Awards";
import Contact from "./Components/contact/Contact";
import "./app.scss" 
import { useState } from 'react';
import Menu from './Components/menu/Menu';


const App=()=> {
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Awards/>
        <Contact/>
      </div>
     </div>
  );
}

export default App;
