import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return (
    <div>
    <h1>MyApp</h1>
    </div>
  )
}

const reactElement ={
  type : 'a',
  props :{
      href: 'https://www.google.com',
      target : '_blank'
  },
  children :'Click me to visit google'
}

const anotherElement =(
  <a href='https://www.google.com' target='_blank'>Click me to visit google</a>
)

const city = 'Mumbai'

const reactElement2= React.createElement(
  'a',
  {href:'https://www.google.com',target:'_blank'},
  'click to visit google',
  city

)
createRoot(document.getElementById('root')).render(
  
    reactElement2
  
)

export default App
