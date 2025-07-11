import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

function Layout() {
  return (
    <>
    <section className='flex flex-col justify-center'>
    <NavBar/>
    <section className='flex'>
        <Outlet/>
    </section>
    <Footer/>
    </section>
    </>
  )
}

export default Layout