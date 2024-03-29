import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value :10,
}

export const CounterSlice= createSlice ({
    name :"counter",
    initialState,
    reducers: {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
        increment : (state) => {
            state.value +=1
        },
        decrement : (state) => {
            state.value -=1
        },
        incrementByAmount : (state,action) =>{
            state.value += action.payload
        }
    }
})

export const{increment, decrement,incrementByAmount}= CounterSlice.actions

export default CounterSlice.reducer