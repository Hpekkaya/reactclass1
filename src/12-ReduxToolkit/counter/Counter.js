import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './CounterSlice'

const Counter = () => {

    // We can reach the states saved in store
    const count = useSelector((state)=>state.counter.value)

    // we need dispatces in order to run actions which triggers reducers
    const dispatch = useDispatch()
  return (
    <div>
        <div style={{fontSize:"100px"}}>{count}</div>
        <button onClick={()=> dispatch(increment())}>Increment(+)</button>        
        <button onClick={()=> dispatch(decrement())}>Decrement(-)</button>        
    </div>
  )
}

export default Counter