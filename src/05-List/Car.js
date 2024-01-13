import React from 'react'

const Car = (props) => {
  return (
    <div>
        <li>
            {props.value+1} {props.brand}
        </li>
    </div>
  )
}

export default Car