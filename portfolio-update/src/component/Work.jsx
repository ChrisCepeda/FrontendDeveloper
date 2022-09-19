import React from 'react'
import './Work.scss'
import { motion } from 'framer-motion'
import Modalcode from '../component/Modalcode'
import html from '../assets/images/html2.png'
import css from '../assets/images/css2.png'
import react from '../assets/images/react.png'
import javascript from '../assets/images/js.png'
import node from '../assets/images/node.png'
import api from '../assets/images/api.png'
import firebase from '../assets/images/firebase.png'
import xampp from '../assets/images/xampp.png'


const Work = () => {
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
           initial={{x:20, opacity: 0,}}
           whileInView={{x:0, opacity:1}}
           transition={{delay:1, duration:.5, ease:'easeIn'}}
            >

          <h2>CODE</h2>
          <div className='tech'>
              <img src={html} alt='html'/>
              <img src={css} alt='css'/>
              <img src={javascript} alt='javascript'/>
              <img src={react} alt='react'/>
              <p> HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p> React</p>
              <img src={node} alt='node'/>
              <img src={api} alt='api' />
              <img src={firebase} alt='firebase'/>
              <img src={xampp} alt='xampp'/>
              <p>Node</p>
              <p>API</p>
              <p> Firebase</p>
              <p>Xampp</p>
          </div>

        
         <Modalcode />
          
            
          </motion.div>


          <motion.div className='work-card'
           initial={{x:20, opacity: 0,}}
           whileInView={{x:0, opacity:1}}
           transition={{delay:2, duration:.5, ease:'easeIn'}}
           >
           
           <h2>TOOLS</h2>

          
           
          
         </motion.div>

        <motion.div className='work-card'
        
          initial={{x:20, opacity: 0}}
          whileInView={{x:0, opacity:1}}
          transition={{delay:3, duration:.5, ease:'easeIn'}}>
        
        
        <h2>COMPETENCE</h2>

        </motion.div>
        </div>


      </div>
   
  )
}

export default Work