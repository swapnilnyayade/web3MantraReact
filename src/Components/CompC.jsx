import React from 'react'
import { AppContext, AppCntxt } from '../App'
import { useContext } from 'react'

const CompC = ({data}) => {

  const CompCContext = useContext(AppContext);
  const CompCCntxt = useContext(AppCntxt);

  return (
    <div className='compc'>
        <h3>CompC</h3>
        <h4>{data}</h4>
        <h4>{CompCContext.name}</h4>
        <h4>{CompCContext.data.age}</h4>
        <h4>{CompCContext.data.post}</h4>
        <h4>{CompCCntxt[1]}</h4>
    </div>
  )
}

export default CompC