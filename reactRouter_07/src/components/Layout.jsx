import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'


// purpose of this layout file is that header an and footer will be same for all pages home,about us etc.
// so putting all the element in each component is not optimized way.so we need this file
// for that we will use Outlet. we also nned to inform to main.jsx
function Layout() {
  return (
    <>
        <Header/>
        {/* this will change and header and footer will be same*/}
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout