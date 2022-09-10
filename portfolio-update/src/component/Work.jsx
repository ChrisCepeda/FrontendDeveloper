import React from 'react'
import './Work.scss'
import { motion } from 'framer-motion'

const Work = () => {
  return (   
    <div className='work-container'>
      <div className='work-title'>  <h1>Work</h1></div>
    <div className='work-wrapper'>
    

        <motion.div className='work-card'
    
           initial={{x:-20, opacity: 0,}}
           whileInView={{ x:0,opacity: 1}}
           transition={{duration:1.5, ease:'easeIn'}}
          >
            <h1>WEB</h1>

        
        
        </motion.div>

        </div>
        </div>

   
  )
}

export default Work