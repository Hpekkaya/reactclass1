import React, { useState } from 'react'

const UseStateHook = () => {

    const [color, setColor] = useState("brown")

  return (
    <div>
        <h1>My favourite color is {color}</h1>
        <button type="button" onClick={()=>setColor("blue")}>Change Color</button>
    </div>
  )
}

export default UseStateHook