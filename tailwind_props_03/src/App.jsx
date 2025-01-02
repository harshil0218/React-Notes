import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const my_obj  = {
    name:"Sweatshirt",
    price:"$19.99"
  }
  let arr=[1,2,3]
  return (
    <>
      <div className='bg-gray-500 text-yellow-300 p-4 rounded-2xl mb-5'>Hello Tailwind</div>
      {/* /*<Card  channel='mychannel' obj={my_obj}/> */}
      <Card arr name='John'/>
    </>
  )
}

export default App
