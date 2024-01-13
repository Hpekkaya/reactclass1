import React from 'react'

const Events1 = () => {
    const shoot =()=> {
        alert("Greet Shoot !")
    }
    const shoot2 =(a)=> {
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
        <button onClick={shoot}>Take the Shoot</button> <h6></h6>
        <button onClick={()=>shoot2("Goal !")}>Take the Shoot2</button><h6></h6>
        <button onClick={(event)=>shoot3("Goal !",event)}>Take the Shoot3</button>
    </div>
  )
}

export default Events1