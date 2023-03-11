import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useSearchParams } from 'react-router-dom'

const UserDetails = () => {
    const {userId} = useParams() 
    const [data, setData] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams.get('name'))
    console.log(searchParams.get('age'))
    console.log(searchParams.getAll('age'))

    const reset = () => {
        setSearchParams({})
    }
    const demo = () => {
        setSearchParams({name:'ajit', age: 28})
    }
    useEffect(() => {
      async function getData() {
        const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`)
        const res = await get.json()
        setData(res)
  
      }
      getData()
    }, [])
    return (
      <div>    
        {
          data.map((element, index)=>{
            return(
                <div key={index}>
                  <h4>{element.firstName}</h4>
                  <h4>{element.lastName}</h4>
                  <h4>{element.email}</h4>
                  <img src={element.imageUrl} alt="img" />
                  <h4>{element.contactNumber}</h4>
                  <h4>{element.age}</h4>
                  <h4>{element.dob}</h4>
                  <button onClick={reset}>Reset</button>
                  <button onClick={demo}>Demo</button>
                </div>

            )
          })
        }
      </div>
    );
}
export default UserDetails