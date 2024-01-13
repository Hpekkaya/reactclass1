import React from 'react'

const Garage = ({cars}) => {
    // const cars = props.cars  //(props)
  return (
    <div>
        <h1>Garage</h1>
        {cars?.length >0 && <h2>In the Garage there are {cars.length} cars</h2>}
    </div>
  )
}

// If added "?" marks, will not return error, Beceuse it means check first then continue

export default Garage