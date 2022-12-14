import React from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import Aboutme from '../assets/images/christina.jpg'
import { Link } from 'react-router-dom'


const About = () => {
  return (

    <div className='About-container'>
       <motion.div className='image-me'
         initial={{x:-20, opacity: 0,}}
         whileInView={{x:0, opacity: 1}}
         viewport={{ once: true }}
         transition={{delay:1, duration:0.5, ease:'easeIn'}}
        >
          
        <img src={Aboutme} alt='christina'/>   
         </motion.div>

    
    <motion.div className='text-me'
       initial={{y:20, opacity: 0}}
       whileInView={{y:0, opacity: 1}}
       viewport={{ once: true }}
        transition={{delay:1, duration:0.5, ease:'easeIn'}}>
     
        <h1>Hello!</h1> </motion.div>

        <motion.div className='about-text'
        initial={{y:10, opacity: 0}}
        whileInView={{ y:0,opacity: 1}}
        viewport={{ once: true }}
         transition={{delay:2, duration:0.8, ease:'easeIn'}}>
        <p> I'm a Stockholm based Frontend developer with 
          great experience in designing solutions. <br></br>
          Whether it is designing solutions on the web for clients,
          designing teaching methods and lessons for 
          students or designing clothes and patterns for customers,
          the mindset in my work experience has always been entrepreneurial, 
          curious and innovative. </p>

          <Link to="/About">
          <motion.button className='about-button'
           
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
           >
           <p>Read More</p>  </motion.button> </Link>
         
          </motion.div>
      
          </div>
  )
};

export default About