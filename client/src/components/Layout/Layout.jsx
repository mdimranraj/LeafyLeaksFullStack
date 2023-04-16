import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

function Layout({children}){
  return (
    <>
    <Navbar/>
    <main style={{minHeight: "70vh"}}>
        {children}
    </main>
    <Footer/>
    </>
  )
}

export default Layout;