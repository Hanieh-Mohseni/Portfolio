import React from 'react';
import "./menu.scss"

const Menu=({menuOpen, setMenuOpen})=> {
  return (
  <div className={'menu '+(menuOpen && "active")} >
      <ul>
          <li onClick={()=>setMenuOpen(false)}>
              <a href='#intro'>Home</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href='#portfolio'>Profile</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href='#works'>Resume</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href='#testimonials'>Award</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href='#contact'>Contact</a>
          </li>
      </ul>

  </div>
  )
}

export default Menu;
