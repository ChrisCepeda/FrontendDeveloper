
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
        <NavLink to="/" activeClassName="active">
 Home
</NavLink>

          
            <li><NavLink to="/Projects" activeClassName="active">PROJECTS</NavLink></li>
            <li><a href="/Blog">BLOG</a></li>
            <li><a href="/About">ABOUT</a></li>
            <li><a href="/Home" className='active'>
           <FaHome size={26} style={{verticalAlign:'bottom'}}  />
            </a></li>
           
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

        </ul>
      </div>


  </div>
        
</div>
)

}

export default Navbar

