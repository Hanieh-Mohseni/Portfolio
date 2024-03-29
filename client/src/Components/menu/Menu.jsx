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
              <a href='#portfolio'>Resume</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href='#projects'>Projects</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href='#Awards'>Awards</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href='#contact'>Contact</a>
          </li>
      </ul>

  </div>
  )
}

export default Menu;
