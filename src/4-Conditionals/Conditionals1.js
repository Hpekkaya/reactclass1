import React from 'react'
import Goal1 from './Goal1'
import Garage1 from './Garage1'

const Conditionals1 = () => {
    const cars = ["Ford", "BMW","Audi","VolksWagen"]  

    const display = (cars)=>{        
        console.log(cars)
    }
    return (
    <div>
        {/* <h2>Conditional</h2> */}
        {/* <Goal1 isGoal={true}/> */}
        <Garage1 cars={cars}/>
    </div>
  )
}

export default Conditionals1