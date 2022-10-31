import React from 'react'
import './Footer.scss'
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'
import { useState } from "react";
import {db} from '../firebase';
import { addDoc, collection } from 'firebase/firestore'


function Footer(){
const [input, setInput] = useState('');
const [message, setMessage] = useState('');



function submitHandler(e) {
  e.preventDefault()
  if (input === '') {
    return 
  }

    
  const emailCollRef = collection(db, 'email')
  addDoc(emailCollRef, {
    email: input,
    myDate: [ new Date() ]
    })

  .then(response =>{
    console.log(response)
  }).catch(error =>{
    console.log(error.message)
  })
  setInput('')
  setMessage('THANK YOU!')
  setTimeout(() => {
    setMessage('');
  }, 5000)
}

  return (
    <div className='footer'>
      <div className='footer-container'>

      <div className='contact'>
          
          <div className='footer-title'>
            <p>CONTACT ME</p>
          </div>

          <div className='footer-icons'>
            <div className='footer-linked'>
          <FaLinkedin size={26} style={{verticalAlign:'bottom'}}></FaLinkedin>
          </div>
            <div className='footer-mail'>
           <FaRegEnvelope size={26} style={{verticalAlign:'bottom'}}></FaRegEnvelope>
             </div>
             <div className='footer-github'>
           <FaGithub size={26} style={{verticalAlign:'bottom'}}></FaGithub>
             </div>

          </div>


   

      </div>

      <div className='footer-subscription'>
          <div className='footer-title'>
            <p>SIGN UP FOR NEWSLETTER
    
            </p>
          </div>
          <form onSubmit={submitHandler}>
            <input className='form' type="email" value={input} onChange={ e =>setInput(e.target.value)} />
            <button className='form-button' type="submit">Submit</button>
          </form>
          <div className='validation'>
          <h2>{message} </h2>
           </div>

      </div>

      <div className='social'>
      <div className='footer-title'>
            <p>LATEST BLOG</p>
          </div>
          <div className='border-bottom'>
          </div>
          <ul className='bloglist'>
            <li>LEMONTREE</li>
            <li>CLIENT PROJECT</li>
            <li>VACAY</li>
            <li>MERN PROJECT</li>
            
          </ul>
      </div>

    </div>
    </div>
  )
};


export default Footer