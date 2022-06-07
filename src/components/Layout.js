import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout(props) {
  return (
    <div className='container'>
        <Header/>
        <Navbar/>
        <main>{props.children}</main>
        <Footer/>
    </div>
  )
}
