
import './Navbar.scss'
import { FaHome } from 'react-icons/fa'
import Sidebar from './Sidebar'
import { NavLink } from 'react-router-dom'




const Navbar = () => {

return(


    <div className='nav'>
        
    <div className="navbar">

      <div className="title">
          <h1>CEPEDA PORTFOLIO</h1>
      </div>

   

      <div  className="nav-links">
        <ul>
            <li><NavLink to="/Projects" activeclassname="active">PROJECTS</NavLink></li>
            <li><NavLink to="/Blog" activeclassname="active">BLOG</NavLink></li>
            <li><NavLink to="/About" activeclassame='active'>ABOUT</NavLink></li>
            <li><NavLink to="/Home" activeclassname='active'>
           <FaHome size={26} style={{verticalAlign:'bottom'}}  />
            </NavLink></li>
           
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

        </ul>
      </div>


  </div>
        
</div>
)

}

export default Navbar

