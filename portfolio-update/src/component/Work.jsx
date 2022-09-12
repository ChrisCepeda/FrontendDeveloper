import React from 'react'
import './Work.scss'
import Modaldesign from './Modaldesign'
import Modalfrontend from './Modalfrontend'
import { motion } from 'framer-motion'


const Hero = () => {
  return (
    <div className='work'>
    <div className='work-container'>
    
     <motion.div
     initial={{y:100, opacity: 0,}}
     animate={{y:0, opacity: 1,}}
     transition={{duration:1.5, ease:'easeIn'}}
     
     ><h1>SKILLS</h1>
     </motion.div> 
    </div>

    
    <div className='work-wrapper'>

          <motion.div className='work-card'
           initial={{x:100, opacity: 0,}}
           animate={{x:0, opacity:1}}
           transition={{delay:3, duration:1.5, ease:'easeIn'}}
            >
          
          <Modalfrontend />
            
          </motion.div>


          <motion.div className='work-card'
           initial={{x:100, opacity: 0,}}
           animate={{x:0, opacity:1}}
           transition={{delay:4, duration:1.5, ease:'easeIn'}}
           >
          
          
          <Modaldesign />
         </motion.div>

        <motion.div className='work-card'
        
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