import React from 'react'
import { useState } from 'react'
import { Link }  from 'react-scroll'
import './Navbar.css'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
 
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const handlelinks = () => {
      setIsOpen(!isOpen);
    }
  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className="navbar py-4">
    <div className="logo">Pearl._.MK</div>
    <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
    <div className='line'></div>
    <div className='line'></div>
    <div className='line'></div>
    </div>
    <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
      <li><Link to="Home" onClick={handlelinks}>Home</Link></li>
      <li><Link to="AboutMe" onClick={handlelinks}>AboutMe</Link></li>
      <li><Link to="Resume" onClick={handlelinks}>Resume</Link></li>
      <li><Link to="Project" onClick={handlelinks}>Project</Link></li>
      <li><Link to="ContactMe" onClick={handlelinks}>ContactMe</Link></li>
    </ul>
    </div>
    </div>
    </div>
  )
}

export default Navbar