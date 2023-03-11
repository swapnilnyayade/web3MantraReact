import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='contact'>
        <h3>Contact Page</h3>
        <Link to='insta'><h4>Instagram</h4></Link>
        <Link to='snap'><h4>Snapchat</h4></Link>
        <Outlet/>
    </div>
  )
}

export default Contact