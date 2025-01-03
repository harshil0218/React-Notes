import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  // here also provider is used but from react-rudex
  // instead of values we use store
  <Provider store = {store}>
    <App />
  </Provider>,
)
