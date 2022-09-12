import React from 'react'
import Navbar from '../Navbar'
import Header from './Header'
import About from './About'
import Reviews from './Reviews'
import Footer from './Footer'

function Main() {
  return (
    <div>
       <Navbar/>
       <Header/>
       <About/>
       <Reviews/>
       <Footer/> 

    </div>
  )
}

export default Main;