import React from 'react'

const Garage = ({cars}) => {
    // const cars = props.cars

  return (
    <div>
        <h1>Garage</h1>
        {/* {cars.length > 0 && <h2>You have {cars.length} cars in your garage</h2>} */}
        {cars?.length > 0 && <h2>You have {cars.length} cars in your garage</h2>}
        {/* If ? added will not return error Because it aims first check then return */}
    </div>
  )
}

export default Garage