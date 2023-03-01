import React from 'react'

export const Movie = (props) => {
  return (
    <div className='movie' >
      <img src={props.img} alt="" />
      <p>{props.title}</p>
      <p>{props.year}</p>
    </div>
  )
}
