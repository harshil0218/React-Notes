import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import User from './components/user/User.jsx'
import Github, { githubInfoLoader } from './components/github/Github.jsx'
// we re not going to use <App/>. We will use router provider
// 2 ways tocreate router

// method-1
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path:'',
//         element: <Home/>
//       },
//       {
//         path: 'about',
//         element:  <About/>
//       },
//       {
//         path:'contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])

// method-2 preferable

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      {/* we are now passing parameter to url for fetching data. Here :user_id is parameter */}
      <Route path='user/:user_id' element={<User />} />
      {/* loader will start fetching data when we hob=ver to the option and it also store in cache memory to make app faster */}
      <Route
        loader={githubInfoLoader}
        path='github'
        element={<Github />} />

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
