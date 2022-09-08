import React from 'react'
import Home from './Home'
import Navbar from '../component/Navbar'
import './Pages.scss'



const Pages = () => {
  return (
  
    <div className='Wrapper' id="outer-container">
     <div id="page-wrap">
      <Navbar />
       <Home />
     </div>
    </div>
    
  )
}

export default Pages