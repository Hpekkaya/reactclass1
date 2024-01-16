import React, { useState } from 'react'
import Components1 from './Components1'

const UseContext = () => {
    const [user, setUser]= useState("Ahmet Hakan")
  return (
    <div>
        <h1>{`Hello ${user}`}</h1>
        <Components1 user={user}/>
    </div>
  )
}

export default UseContext