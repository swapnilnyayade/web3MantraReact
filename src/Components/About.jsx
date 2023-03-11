import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()
  return (
    <div>
        <h3>About Page</h3>
        <button onClick={()=>navigate(-1)}>Go Back</button>
        <button onClick={()=>navigate('/')}>Home</button>
    </div>
  )
}

export default About