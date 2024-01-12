import React from 'react'

const Garage1 = ({cars}) => {
  // const cars =props.car
  return (
    <div>
      <h2>In the Garage</h2>
      {cars.length>0 && <h2> You have {cars.length} cars in the Garage</h2>}
      
    </div>
  )
}

export default Garage1