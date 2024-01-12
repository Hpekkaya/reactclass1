import React from 'react'

const Car1 = (props) => {
  return (
    <div>
        {/* <h2>My Car brand is {props.brand} and model is {props.model}</h2> */}
        <h2>My Car :  </h2>
        <h2> Brand : {props.brand.name} Model : {props.brand.model}  </h2>
        <h2> Color : {props.brand.color} Type : {props.brand.type}  </h2>
    </div>
  )
}

export default Car1