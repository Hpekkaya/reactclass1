import React from 'react'
import Components2 from './Components2'

// Before useContex
// const Components1 = ({user}) => {
    
// After useContex no needd to use {user}
const Components1 = () => { 
  return (
    <div>
        <h1>Components1</h1> 
        {/* <Components2 user={user}/> */} 
        <Components2/> 

    </div>
  )
}

export default Components1