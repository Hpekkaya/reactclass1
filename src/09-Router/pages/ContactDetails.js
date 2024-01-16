import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

const ContactDetails = () => {
  const {id} = useParams()
  // const [user, setUser] = useState(null)
  
  const location = useLocation();
  const [user, setUser] = useState(location.state[Number(id)-1])

  // This fetch data each time 
  // useEffect(()=>{
    //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    //   .then((res)=>res.json())
    //   .then((data)=>setUser(data))
    // },[id])
    
    // This fetch data only one time 

    useEffect(()=>{
      setUser(location.state[Number(id)-1])
    },[location.state,id])

  return (
    <div>
      <h2>User Detail</h2>
      {
        user && (
          <>
            <pre>{JSON.stringify(user,null,2)}</pre>
            <p>e-mail : {user.email}</p>

          </>
        )
      }
      {/* <Link to= {`/contact/${Number(id)-1}`}>Previous User</Link> &emsp;
      <Link to= {`/contact/${Number(id)+1}`}>Next User</Link>  */}

        <Link to={`/contact/${Number(id) - 1 }`} state={location.state}>Previous User</Link> &emsp;
        <Link to={`/contact/${Number(id) + 1 }`} state={location.state}>Next User</Link> 
    </div>
  )
}

export default ContactDetails