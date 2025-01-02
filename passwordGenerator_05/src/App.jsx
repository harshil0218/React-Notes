import { useCallback, useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
  const [length, setlength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [spcharAllowed, setSpcharAllowed] = useState(false)
  const [password,setpassword] = useState('')

  //use Ref
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwoedRef.current?.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])
  const passwordGenerator = useCallback(()=>{
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let number = '0123456789'
    let spchar = '!@#$%^&*()_+'
    let password = ''
  
    if(numberAllowed) str+=number
    if(spcharAllowed) str+=spchar

    for(let i=0;i<length;i++){
      let random = Math.floor(Math.random()*str.length+1)
      password+=str[random]
    }
    setpassword(password)
  
  }, [length, numberAllowed, spcharAllowed,setpassword])

  useEffect(() => {passwordGenerator()}, [length, numberAllowed, spcharAllowed,passwordGenerator])
  return (
    <>
      <h1 className='text-4xl text-center mt-10 text-white'>Password Generator</h1>

      <div className='w-full max-w-md shadow-md justify-center mx-auto p-4 m-4 text-red-400 bg-slate-300'>
        <div className='flex shadow-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none w-full px-4 py-2'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='bg-red-500 text-white px-4 shrink-1'
            >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range' 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
            />
            <label className='text-black'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox'
            defaultChecked={numberAllowed}
            onChange={()=>{setNumberAllowed((prev)=>!prev)}}
            />
            <label className='text-black'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox'
            defaultChecked={spcharAllowed}
            onChange={()=>{setSpcharAllowed((prev)=>!prev)}}
            />
            <label className='text-black'>Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
