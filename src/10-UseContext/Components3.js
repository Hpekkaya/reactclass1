import React, { useContext } from 'react'
import { UserContext } from './UseContext'

// Before useContex
// const Components3 = ({user}) => {

const Components3 = () => {
    const user2 = useContext(UserContext)
  return (
    <div>
        <h1>Components3</h1>
        {/* <h2>{`Hello ${user}`}</h2> */}
        <h2>{`Hello ${user2}`}</h2>

    </div>
  )
}

export default Components3