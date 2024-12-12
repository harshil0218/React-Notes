import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color1, setColor] = useState("red")

  return (
    
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color1}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-slate-100 px-2 py-2 rounded-lg">
          <button onClick={()=> setColor('red')} className='px-3 outline-none shadow-lg rounded-lg ' style={{backgroundColor:'red'}} >Red</button>
          <button onClick={()=> setColor('green')} className='px-3 outline-none shadow-lg rounded-lg ' style={{backgroundColor:'green'}} >Green</button>
          <button onClick={()=> setColor('blue')} className='px-3 outline-none shadow-lg rounded-lg ' style={{backgroundColor:'blue'}} >Blue</button>
        </div>
        </div>
        
      </div>
    
  )
}

export default App
