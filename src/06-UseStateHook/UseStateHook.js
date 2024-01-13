import React, { useState } from 'react'

const UseStateHook = () => {
    const [color, setColor] = useState("Brown")
    const [counter, setCounter] = useState(0)

    const [car, setCar] = useState({
        brand : "Nissan",
        model : "Quasqai",
        year : 2014,
        color :"white"
    })
    const updateColor =()=>{
        setCar(previousState => {
            return {...previousState, color: "Red"}
        })
    }
  return (
    <div>
        <h2>My Favorite Color is {color} </h2>
        <button type='button' onClick={()=>setColor("Blue")}>Change Color</button>

        <h2>Counter is : {counter} </h2>
        <button type='button' onClick={()=>setCounter(counter-1)}>Decrease</button>
        <button type='button' onClick={()=>setCounter(counter+1)}>Increase</button>

        <h2>It is a {car.brand} {car.model} produced in {car.year} and its color is {car.color} </h2>
        <button type='button' onClick={()=>setCar({...car, year:2020, model:"Trailer", color:"Blue"})}>Change Car</button>

        <button type='button' onClick={updateColor}>Update Color</button>
    </div>
  )
}

export default UseStateHook