import React from "react"
import { registerRootComponent } from 'expo'
import App from './App'
import { Provider } from 'react-redux'
import store from "./src/state/store/store"

const ConnectedApp = () => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  )
}
registerRootComponent(ConnectedApp)