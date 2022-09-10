import React from 'react'
import './Home.scss'
import Hero from '../component/Hero'
import About from '../component/About'
import Work from '../component/Work'


const Home = () => {
  return (
    <>
     <Hero />
     <About/>
     <Work/>
    </>
  )
}

export default Home