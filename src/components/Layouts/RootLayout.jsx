import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Category from './Category'
import Footer from './Footer'

const RootLayout = () => {
  return (
   <>
    <Navbar/>
    <Category/>
    <Outlet/>
    <Footer/>
    
   </>
  )
}

export default RootLayout