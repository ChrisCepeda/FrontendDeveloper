
import './Navbar.scss'
import { FaHome } from 'react-icons/fa'
import Burger from './Burger'
import { useState } from 'react'




export default function Navbar  () { 

const [burgerOpen, setBurgerOpen] = useState(false); 
const toggleBurger = () => {
  setBurgerOpen(!burgerOpen)
}

return(


    <div className='nav'>
        
    <div className="navbar">

      <div className="title">
          <h1>CEPEDA PORTFOLIO</h1>
      </div>

   

      <div  className="nav-links">
        <ul>
          
            <li><a href="/">PROJECTS</a></li>
            <li><a href="/">BLOG</a></li>
            <li><a href="/">ABOUT</a></li>
            <li><a href="/" className='active'>
           <FaHome size={26} style={{verticalAlign:'bottom'}}  />
         
            
            </a></li>
        </ul>
      </div>


  <div className='burger' onClick={toggleBurger}>
    <Burger isOpen={burgerOpen}/>
    </div>

  </div>
        
</div>
)

}


