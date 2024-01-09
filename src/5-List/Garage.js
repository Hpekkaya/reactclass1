import React from 'react'
import Car from './Car'

const Garage = () => {

    const cars=["Ford","BMW","Audi","Nissan"]

  return (
    <div>
        <h2>Cars in my Garage == </h2>
        <ul>
            {
                cars.map((car,value) => <Car brand = {car} value={value}/>)
            }
        </ul>
    </div>
  )
}

export default Garage