import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ContactDetails = () => {
  const {id} = useParams()
  const [user, setUser] = useState(null)
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>res.json())
    .then((data)=>setUser(data))
  },[id])
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
      <Link to= {`/contact/${Number(id)-1}`}>Previous User</Link> &emsp;
      <Link to= {`/contact/${Number(id)+1}`}>Next User</Link> 
    </div>
  )
}

export default ContactDetails