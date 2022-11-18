import React from 'react'
import './Aboutme.scss'
import { motion } from 'framer-motion'

const About = () => {
  return (
   
    <div className='aboutme-container'>

        
        <motion.div className='about-card'
         initial={{y:20, opacity: 0}}
         whileInView={{y:0, opacity:1}}
         viewport={{ once: true }}
         transition={{delay:1, duration:.5, ease:'easeIn'}}>
             
           <h2>FRONTEND DEVELOPMENT</h2>  
         <a href='https://lemontree.se/' target='_blank'rel="noreferrer">  <h3>LEMONTREE INTERNSHIP</h3></a>
            <p>I'm currently doing my internship at Lemontree as a Frontend Developer. </p>
                    
                    <h3>DIPLOMA FRONTEND DEVELOPMENT</h3>
                     <p>At Hyper Island where I've learned to architect and develop websites and applications, practising Agile workflow in team and where I, 
                       will be receiving my Diploma in April 2023.</p> 
                     
          </motion.div>

        

      </div>

         
        
  )
}

export default About 