import React from 'react'
import Header from './Header'
import Navigationbar from './Navigationbar'
import Footer from './Footer'

export default function Layout(props) {
  return (
    <div className='container layout'>
        <Header/>
        <Navigationbar/>
        <main>{props.children}</main>
        <Footer/>
    </div>
  )
}
