import React from 'react'

const Car = (props) => {
  return (
    <div>
        {/* <h2>I am a {props.brand}</h2>  */}
        <h2>I am a {props.brand.name} and {props.brand.model}</h2>
    </div>
  )
}

export default Car

// rafce