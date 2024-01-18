import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/Store'
import Counter from './counter/Counter'


const ReduxToolkit = () => {
  return (
    // We should use Provider
    <Provider store = {store}>
      <Counter/>
    </Provider>

  )
}

export default ReduxToolkit