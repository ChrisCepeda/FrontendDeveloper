
import './Navbar.scss'
import { FaHome } from 'react-icons/fa'
import Sidebar from './Sidebar'




const Navbar = () => {

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


      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
  </div>
        
</div>
)

}

export default Navbar

