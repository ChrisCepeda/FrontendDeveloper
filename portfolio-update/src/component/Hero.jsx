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
     transition={{duration:0.5, ease:'easeIn'}}
     
     ><h1>CHRISTINA <br></br>CEPEDA</h1>
     </motion.div> 
    </div>

    
    <div className='Card-wrapper'>
          <motion.div className='Intro-card'
        
          initial={{y:100, opacity: 0,}}
           animate={{y:0, opacity:1}}
            transition={{delay:1, duration:0.5, ease:'easeIn'}}
            whileHover={{ scale: 1.1 }}>
          
          
            <h1>01</h1>
            <h4>FRONTEND
            DEVELOPER</h4>

          </motion.div>

          <motion.div className='Intro-card'
        
        initial={{y:100, opacity: 0,}}
         animate={{y:0, opacity:1}}
          transition={{delay:1.5, duration:0.8, ease:'easeIn'}}>
        
        
          <h1>02</h1>
          <h4>DESIGNER<br></br>
          </h4>

        </motion.div>

        <motion.div className='Intro-card'
        
        initial={{y:100, opacity: 0}}
         animate={{y:0, opacity:1}}
          transition={{delay:1.8, duration:1.2, ease:'easeIn'}}
           >
        
        
          <h1>03</h1>
          <h4>EDUCATER<br></br></h4>

        </motion.div>
        </div>


      </div>
   
  )
}

export default Hero 