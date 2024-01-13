import React, { useState } from 'react'

const UseStateHook = () => {
    const [color, setColor] = useState("Brown")
    const [counter, setCounter] = useState(0)
  return (
    <div>
        <h2>My Favorite Color is {color} </h2>
        <button type='button' onClick={()=>setColor("Blue")}>Change Color</button>

        <h2>Counter is : {counter} </h2>
        <button type='button' onClick={()=>setCounter(counter-1)}>Decrease</button>
        <button type='button' onClick={()=>setCounter(counter+1)}>Increase</button>
    </div>
  )
}

export default UseStateHook