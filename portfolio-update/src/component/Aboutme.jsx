import React from 'react'
import './Aboutme.scss'
import { motion } from 'framer-motion'

const About = () => {
  return (
   
    <div className='about-container'>
        <div className='card-wrapper'>
        
        <motion.div className='about-card'
         initial={{x:20, opacity: 0}}
         whileInView={{x:0, opacity:1}}
         viewport={{ once: true }}
         transition={{delay:1, duration:.5, ease:'easeIn'}}>
             
           <h2>FRONTEND DEVELOPMENT</h2>  
         <a href='https://lemontree.se/' target='_blank'rel="noreferrer">  <h3>LEMONTREE INTERNSHIP</h3></a>
            <p>I'm currently doing my internship at Lemontree as a Frontend Developer. </p>
                    
                    <h3>DIPLOMA FRONTEND DEVELOPMENT</h3>
                     <p>At Hyper Island where I've learned to architect and develop websites and applications, practising Agile workflow in team and where I, 
                       will be receiving my Diploma in April 2023.</p> 
                     
          </motion.div>

          <motion.div className='about-card'
             initial={{x:20, opacity: 0}}
             whileInView={{x:0, opacity:1}}
             viewport={{ once: true }}
             transition={{delay:1.5, duration:.5, ease:'easeIn'}}>
             
           <h2>DESIGN</h2>  
              <h3>UX & UI</h3>
               <p>Creating projects focusing on the user experience and how the user relate to the product
                and how the visual and interactive elements of the site looks and behaves. </p>
                    
                    <h3>CEPEDA DESIGN </h3>
                     <p>During four years I ran my own business in retail, 
                        designing clothes and collaborating with tailors in India and Bali.</p> 
                     
          </motion.div>

      </div>
    </div>
         
        
  )
}

export default About 