import React from 'react'
import { forwardRef } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'



const Navbar = ({homeClick, showNavbar, skillSect, projectScroll, contactSect}, navRef) => {
  return (
  <>
  <header>
    <div className='mobileNav'>
        <span id="mobileHomeLink">Sal Frisina</span>
        <FontAwesomeIcon className="nav-button navbar-button-open" icon={faBars} onClick={showNavbar} />
    </div>
    <nav  className='navbar'> 
      <div ref={navRef} className='nav-links'>
        <span onClick={homeClick}>Home</span>
        <span onClick={skillSect}>Skills</span>
        <span onClick={projectScroll}>Projects</span>
        <span onClick={contactSect}>Contact</span>
        <span><a href='src\assets\Salfrisina-SWE0406.pdf' target="_blank">Resume</a></span>
        <FontAwesomeIcon className='nav-button navbar-button-close ' onClick ={showNavbar} icon={faTimes}/>
       </div>
      
    </nav>
    </header>
  </>
  )
}

export default forwardRef(Navbar)