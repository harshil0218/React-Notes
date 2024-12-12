import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 0
  const addValue = ()=>{
    if(counter<20){
      setCounter(counter+1)
      console.log('addValue',counter)
    }

  }

  const subtractValue=()=>{
    if(counter>0){
      setCounter(counter-1)
      console.log('subtractValue',counter)
    }
  }
  return (
    <>
      <h3>Counter : {counter}</h3>
      <button onClick={addValue}>Add Value</button><br/>
      <button onClick={subtractValue}>Subtract Value</button>
    </>
    
  )
}

export default App
