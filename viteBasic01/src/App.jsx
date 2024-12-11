import { useState } from 'react'
import Coffee from './coffee'
function App() {
  const name= 'Manek'
  return (
    <> 
      <Coffee/>
      <h2>hey bro {name}</h2> 
    </>
  )
}

export default App
