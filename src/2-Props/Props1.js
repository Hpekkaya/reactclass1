import React from 'react'
import Car1 from './Car1'

const Props1 = () => {
    // const myElement = <Car1 brand="Ford" model="Mondeo"/>
    // let var1 = "Tesla", var2 = "Electronics"
    // const myElement2 = <Car1 brand={var1} model={var2}/>

    const carInfo = {
        name : "Volvo",
        model :"2010",
        color :"Red",
        type : "S90"
    }
    const myElement3 = <Car1 brand={carInfo}/>
  return (
    <div>
        {/* {myElement}
        {myElement2} */}
        {myElement3}
    </div>
  )
}

export default Props1