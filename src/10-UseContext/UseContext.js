import React, { createContext, useState } from 'react'
import Components1 from './Components1'

export const UserContext = createContext()

const UseContext = () => {
    const [user, setUser]= useState("Ahmet Hakan")
  return (
    <div>
        {/* Transfering data in a hiearchical way */}
        {/* <h1>{`Hello ${user}`}</h1>
        <Components1 user={user}/> */}

        {/* Transfering data in a direct way */}
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}`}</h1>
            <Components1/>
        </UserContext.Provider>


    </div>
  )
}

export default UseContext