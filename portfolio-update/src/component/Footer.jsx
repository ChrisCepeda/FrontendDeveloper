import React from 'react'
import './Footer.scss'
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'
import { useState } from "react";
import db from '../firebase';

function Footer(){
const [input, setInput] = useState("");
const inputHandler = (e) =>{
  setInput(e.tagret.value);
};
const submitHandler = (e) => {
  e.preventDefault();
  if (input){
    console.log(input);
    //add to forebase 
    db.collection("emails").add({
      email: input, 
      time: firebase.firestore.FieldValue.serverTimeStamp(),
    });
  }
};

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
            <p>GET MY RESUME </p>
          </div>
          <form action="">
            <input className='form' type="email" onChange={inputHandler}/>
            <button className='form-button' type="submit">Submit</button>
          </form>

      </div>

      <div className='social'>
      <div className='footer-title'>
            <p>SOCIALA </p>
          </div>
          <div className='border-bottom'>
          </div>
      </div>

    </div>
    </div>
  )
}


export default Footer