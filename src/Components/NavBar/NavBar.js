import {React} from 'react'
import {IoSearchOutline} from 'react-icons/io5'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './NavBar.css'
import { NavLink } from 'react-router-dom'


function NavBar ({onClick, toggle}) {
    return (

        <header className='navbar'>
            <nav className='navbar_navigation'>
                <div>
                    <DrawerToggleButton  onClick={onClick} toggle={toggle}/>
                </div>
                <img className= "navbar_logo" src="/flix.png" alt = "Logo"/>
                
                <div className='spacer'/>
                <div className='navbar_navigation-items'>
                    <ul>
                        <li><a href="/">Home</a> </li>
                        <NavLink to='/addmovieform'>
                        <li><a href="/addmovieform">Add Movie</a></li>
                        </NavLink>
                    </ul>
                </div>
                <div className="search">
                    <form action="#">
                        <input type="text"
                        placeholder=" Search Movies"
                        name="search"/>
                        <button className="search_button"><IoSearchOutline/></button>
                    </form>
                <div/>
                </div>
            </nav>
        </header>

    )
}



export default NavBar;