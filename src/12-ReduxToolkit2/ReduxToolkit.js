import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

const ReduxToolkit = () => {
  return (
    <div>
        <Provider store={store}>
            Redux Toolkit1
        </Provider>
    </div>
  )
}

export default ReduxToolkit