import React from 'react'

const Car1 = ({definition,addition}) => {
  return (
    <div>
        {/* <h2>My Car brand is {props.brand} and model is {props.model}</h2> */}
        {/* <h2>My Car :  </h2>
        <h2> Brand : {props.brand.name} Model : {props.brand.model}  </h2>
        <h2> Color : {props.brand.color} Type : {props.brand.type}  </h2> */}

        {/* (props) */}
        {/* <h2>{props.definition.person.name}</h2>
        <h2>{props.definition.person.age}</h2>
        <h2>{props.definition.myCar.carName}</h2>
        <h2>{props.definition.myCar.carAge}</h2> */}

        {/* ({definition,addition}) */}
        <h2>{definition.myCar.carName}</h2>
        <h2>{addition.carModel}</h2>
        
    </div>
  )
}

export default Car1