import React from 'react'
import './About.scss'
import Aboutme from '../assets/images/christina.jpg'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='About-container'>
       
     <motion.div className='image-me'
         initial={{x:-20, opacity: 0,}}
         whileInView={{ x:0,opacity: 1}}
          transition={{duration:1.5, ease:'easeIn'}}>

        <img src={Aboutme} alt='christina'/>   
    </motion.div>
       
        

      <motion.div className='text-me'
       initial={{x:20, opacity: 0}}
       whileInView={{ x:0,opacity: 1}}
        transition={{delay:2, duration:1.1, ease:'easeIn'}}>
        <h1>Hello!</h1> </motion.div>

        <motion.div className='text'
        initial={{y:50, opacity: 0}}
        whileInView={{ y:0,opacity: 1}}
         transition={{delay:3, duration:1.5, ease:'easeIn'}}>
        <p> I'm a Stockholm based Frontend developer with 
          great experience in designing solutions. 
          Whether it is designing teaching methods and lessons for 
          students, designing clothes and patterns for customers or 
          designing solutions on the web for clients, 
          the mindset in my workexperience has always been entrepreneurial, 
          curious and innovative. </p>
          </motion.div>

      </div>
      
  )
};

export default About