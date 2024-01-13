import React from 'react'
import Car from './Car'

const Garage = () => {
    // const cars = ["Ford", "BMW", "Audi","Nissan"]
    const cars2 = [
        {id:1, brand:"Ford"},
        {id:2, brand:"BMW"},
        {id:3, brand:"Audi"},
        {id:4, brand:"Nissan"}
    ]
  return (
    <div>
        <h3> Cars in the Garage</h3>
        <ul>
            {/* {cars.map((car,value)=> <Car value={value} brand={car} /> )} */}
            {/* {cars.map((car,value)=> <Car key={value} value={value} brand={car} /> )} */}
            {/* {cars2.map((car,value)=> <Car key={car.id} value={value} brand={car.brand} /> )} */}
            {/* {cars2.map((car,value)=> {
                let saveCar = car
                let saveCarLogo = ". Car is Lovely " + saveCar.brand
                return <Car key={car.id} value={value} brand={saveCarLogo} /> 
            })} */}
            {cars2.map((car,value)=> {
                let saveCar = car
                let saveCarLogo = ". Car is Lovely " + saveCar.brand
                return (
                    <div>
                        <Car key={car.id} value={value} brand={saveCarLogo} />
                        <Car key={car.id+10} value={value} brand={saveCarLogo} />
                    </div>                    
                )
                 
            })}
        </ul>
    </div>
  )
}

export default Garage