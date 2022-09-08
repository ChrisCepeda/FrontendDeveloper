import React from 'react'
import './Hero.scss'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='Hero'>
    <div className='Container'>
     <motion.div
     initial={{y:100, opacity: 0,}}
     animate={{y:0, opacity: 1,}}
     transition={{duration:1.5, ease:'easeIn'}}
     
     ><h1>CHRISTINA <br></br>CEPEDA</h1>
     </motion.div> 
    </div>

    
    <div className='Card-wrapper'>
          <motion.div className='Intro-card'
        
          initial={{x:100, opacity: 0,}}
           animate={{x:0, opacity:1}}
            transition={{delay:3, duration:1.5, ease:'easeIn'}}>
          
          
            <h1>01</h1>
            <h4>FRONTEND
            DEVELOPER</h4>

          </motion.div>

          <motion.div className='Intro-card'
        
        initial={{x:100, opacity: 0,}}
         animate={{x:0, opacity:1}}
          transition={{delay:4, duration:1.5, ease:'easeIn'}}>
        
        
          <h1>02</h1>
          <h4>DESIGNER<br></br>
          </h4>

        </motion.div>

        <motion.div className='Intro-card'
        
        initial={{x:20, opacity: 0}}
         animate={{x:0, opacity:1}}
          transition={{delay:5, duration:1.5, ease:'easeIn'}}>
        
        
          <h1>03</h1>
          <h4>EDUCATER<br></br></h4>

        </motion.div>
        </div>


      </div>
   
  )
}

export default Hero 