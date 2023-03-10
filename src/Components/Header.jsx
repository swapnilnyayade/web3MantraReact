import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='heading'>
        <h1>React Router DOM</h1>
    
            <Link to="/">Home</Link>
          
            <Link to="/about">About</Link>
        
            <Link to="/contact">Contact</Link>
        
    </div>
  )
}

export default Header