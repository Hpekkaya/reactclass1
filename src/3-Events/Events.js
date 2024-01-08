import React from 'react'

const Events = () => {

    const shoot = ()=> {
        alert("Great Shot !")
    }
    const shoot2 = (a)=> {
        alert(a)
    }
    const shoot3 = (a,b)=> {
        alert(b.type)
        b.target.value = "Value is changed"

        console.log(b.target)
        console.log(b.target.value)
        console.log(b)   //In order to see what type of base events 
    }
  return (
    <div>
        <button onClick={shoot}>Take the shoot</button>
        <button onClick={()=>shoot2("Goal !")}>Take the shoot2</button>
        <button onClick={(event)=>shoot3("Goal !",event)}>Take the shoot3</button>
    </div>
  )
}

export default Events