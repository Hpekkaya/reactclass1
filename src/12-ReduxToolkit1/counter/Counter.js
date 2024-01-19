import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

const Counter = () => {

    // useSelector
    // A hook to access the redux store's state. This hook takes a selector function as an argument. The selector is called with the store state.

    //  This hook takes an optional equality comparison function as the second parameter that allows you to customize the way the selected state is compared to determine whether the component needs to be re-rendered.
    const count = useSelector((state)=>state.counter.value)

    const dispatch = useDispatch()

    let amount = 10

  return (
    <div>
        <div style = {{fontSize :"100px"}}>{count}</div>
        <button onClick={()=>dispatch(increment())}> Increment (+) </button>
        <button onClick={()=>dispatch(decrement())}> Decrement (-) </button>
        <button onClick={()=>dispatch(incrementByAmount(amount))}> Increment By {amount} </button>
    </div>
  )
}

export default Counter