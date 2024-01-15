import React, { useState, useEffect } from 'react'

const Contact = () => {
  const [users,setUsers] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>setUsers(data))

  },[])

  return (
    <div>
      <h2>Contact</h2>
      <ol>
        {users.map((user)=><li key ={user.id}>{user.name}</li>)}
      </ol>
    </div>
  )
}

export default Contact