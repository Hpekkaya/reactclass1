import React, { useState } from 'react'

const UseStateHook = () => {

    const [color, setColor] = useState("brown")

    const [car, setCar] = useState ({
        brand :"Ford",
        model: "Mustang",
        year :"1964",
        color:"Red"
    })

  return (
    <div>
        <h1>My favourite color is {color}</h1>
        <button type="button" onClick={()=>setColor("blue")}>Change Color</button>
        <h1>It is a  {car.color} {car.brand} {car.model} from {car.year}</h1>
        <button type='button' onClick={()=> setCar({...car, brand:"BMW", year :"2000"})}>Change Car Year</button>
    </div>
  )
}

export default UseStateHook