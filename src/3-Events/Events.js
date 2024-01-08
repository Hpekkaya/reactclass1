import React from 'react'

const Events = () => {

    const shoot = ()=> {
        alert("Great Shot !")
    }
  return (
    <div>
        <button onClick={shoot}>Take the shoot</button>
    </div>
  )
}

export default Events