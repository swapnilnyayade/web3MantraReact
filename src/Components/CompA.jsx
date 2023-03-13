import React from 'react'
import CompB from './CompB'

const CompA = ({data}) => {

  console.log(data)  
  return (
    <div className='compa'>
        <h3>CompA</h3>
        <CompB data={data} />
    </div>
  )
}

export default CompA