import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import store from './src/state/store/store'
import { registerRootComponent } from 'expo'

global.store = store

const ConnectedApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
registerRootComponent(ConnectedApp)
