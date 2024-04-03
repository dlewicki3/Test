import React from 'react'
import "./Navbar.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  return (
<div className="nav">
<div className="navbar">
  <div className="logo">Dominik Lewicki</div>
  <div className="links">
    <li>Home</li>
    <li>Work</li>
    <li>Process</li>
    <li>About</li>
  </div>
  <button className='nav-btn'>Project request <MdOutlineKeyboardArrowRight  size={20}/>
</button>
</div>
</div>

  )
}

export default Navbar