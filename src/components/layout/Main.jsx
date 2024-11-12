import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Subscribe from '../subComponents/Subscribe'




const Main = () => {
  return (
    <main>
    <Navbar />

       <Outlet />

    <Subscribe />
    <Footer />
    </main>
  )
}

export default Main