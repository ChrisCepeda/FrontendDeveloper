import React from 'react'
import './Home.scss'
import Hero from '../component/Hero'
import About from '../component/About'
import Work from '../component/Work'
import Footer from '../component/Footer'


const Home = () => {
  return (
    <>
     <Hero />
     <About/>
     <Work/>
     <Footer/>
    </>
  )
}

export default Home