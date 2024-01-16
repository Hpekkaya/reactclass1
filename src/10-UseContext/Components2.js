import React from 'react'
import Components3 from './Components3'

// Before useContex
// const Components2 = ({user}) => {

const Components2 = () => {
  return (
    <div>
        <h1>Components2</h1>
        {/* <Components3 user={user}/> */}
        <Components3/>
    </div>
  )
}

export default Components2