import React from 'react'
import Car1 from './Car1'

const Props1 = () => {
    // const myElement = <Car1 brand="Ford" model="Mondeo"/>
    // let var1 = "Tesla", var2 = "Electronics"
    // const myElement2 = <Car1 brand={var1} model={var2}/>

    // const carInfo = {
    //     name : "Volvo",
    //     model :"2010",
    //     color :"Red",
    //     type : "S90"
    // }
    // const myElement3 = <Car1 brand={carInfo}/>

    const person = {
        name : "Hakan",
        age  : "54",
        location : "Istanbul"
    }
    const myCar = {
        carName :"Nissan",
        carAge  :10,
        carModel   :"Quasqai"
    }
    const myProps = {
        person,myCar
    }

    const myElement4 = <Car1 definition={myProps} addition={myCar}/>

  return (
    <div>
        {/* {myElement}
        {myElement2} */}
        {/* {myElement3} */}
        {myElement4}
    </div>
  )
}

export default Props1