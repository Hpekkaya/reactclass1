import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './CounterSlice'

const Counter = () => {

    // We can reach the states saved in store
    const count = useSelector((state)=>state.counter.value)

    // we need dispatces in order to run actions which triggers reducers
    const dispatch = useDispatch()

    let amount = 10

  return (
    <div>
        <div style={{fontSize:"100px"}}>{count}</div>
        <button onClick={()=> dispatch(increment())}>Increment(+)</button>        
        <button onClick={()=> dispatch(decrement())}>Decrement(-)</button>        
        <button onClick={()=> dispatch(incrementByAmount(amount))}>Increment By {amount}</button>        
    </div>
  )
}

export default Counter