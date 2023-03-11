import React from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline"
    }
  }
  return (
    <div className='heading'>
        <h1>React Router DOM</h1>
    
        <NavLink style={navLinkStyles} to="/">Home</NavLink>
        <NavLink style={navLinkStyles} to="/about">About</NavLink>
        <NavLink style={navLinkStyles} to="/contact">Contact</NavLink>
        
    </div>
  )
}

export default Header