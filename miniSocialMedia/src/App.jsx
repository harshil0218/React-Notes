import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth_service'
import {login,logout} from './store/authSlice'
import{Header,Footer} from './components'

function App() {
  // const appwrite_key = import.meta.env.VITE_APPWRITE_API_KEY
  // console.log(appwrite_key);

  const [loading,setLoading] = useState(true)

  const dispatch = useDispatch()
  
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => {
      setLoading(false)
    })
  })
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
         TODO:  {/*<Outlet /> */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
