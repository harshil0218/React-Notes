import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import UserContext from './context/UserContext'

function App() {


  return (
    <UserContextProvider>
      <h1>Hello</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
