// Slice (R) used in Reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:10
}

// Export the slice (R)
// A function that accepts an initial state, an object full of reducer functions, 
// And a "slice name", and automatically generates action creators 
// And action types that correspond to the reducers and state.
export const counterSlice = createSlice ({
    name : "counter",
    initialState,
    reducers : {
        increment : (state) => {state.value +=1} ,
        decrement : (state) => {state.value -=1} ,
        incrementByAmount : (state,action) => {state.value +=action.payload} ,
        
    }

})

export const {increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer