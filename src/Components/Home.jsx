import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  const [state, setState] = useState(2)
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`)
      const res = await get.json()
      setData(res)

    }
    getData()  
    document.title = `${state} Employees Online`
  }, [state])

  return (
    <div className='home'>
    <button onClick={() => setState(state + 2)}>Add (Total={state})</button> 
      {
        data.map((element, index)=>{
          return(
            <Link to={`/${element.id}`}>
              <div className='data' key={index}>
                <h4>{element.firstName}</h4>
                <h4>{element.lastName}</h4>
                <h4>{element.email}</h4>
              </div>
            </Link>
          )
        })
      }
      <Outlet />
    </div>
  );
}
export default Home