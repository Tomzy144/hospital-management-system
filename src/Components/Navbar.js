import {useState, React} from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io';
import { sidebarData } from './SidebarData';
import * as FiIcons from 'react-icons/fi';
import {IconContext} from 'react-icons'


function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = ()=>setSidebar(!sidebar);

  return (
    <>
     <IconContext.Provider value={{color:'#fff'}}>
    <div className='navbar'>
        <div className='navbar-left'>
    <Link to="#" className='menu-bars'>
    <AiIcons.AiOutlineBars className='icons' onClick={showSidebar}/>
    </Link>
        </div>
        <div id="logo-company-name">
        <Link to="#" className ="logo">
            Hospital Management System
        </Link>
        </div>
        <div className='navbar-right'>
        <Link to='/'>
        <button id="div-menu-button">
          <FiIcons.FiLogOut/>Logout
        </button>
        </Link>
        <AiIcons.AiOutlineSearch className='icons'/>
        <IoIcons.IoMdNotifications className='icons'/>
        <BiIcons.BiSolidUserAccount className='icons'/>
 </div>
 
    <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className='nav-menu-items' onClick={showSidebar}>
        <li className='navbar-toggle'>
            <Link to='' className='menu-bars'>
                <AiIcons.AiFillCloseSquare className='icons'/>
            </Link>
        </li>
        {sidebarData.map((item, index)=>{
            return(
                <li key={index} className={item.cName} id='cName'>
                    <Link to={item.path} id='path'>
                        {item.icons}
                        <span>{item.title}</span>
                    </Link>
                </li>
            )
        })}
        </ul>
    </nav>
    </div>
    </IconContext.Provider>
    </>
  )
}

export default Navbar