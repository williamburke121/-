import {React, useState} from 'react'
import {IoSearchOutline} from 'react-icons/io5'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './NavBar.css'
import { NavLink } from 'react-router-dom'


function NavBar ({onClick}) {

    const [toggle, setToggle] = useState (false)

    function handleDrawerToggle () {
        console.log('clicked')
        if(toggle){
          setToggle(false)
        }
        else {
          setToggle(true)
        }
      }
    

    return (


        <header className='navbar'>
            <nav className='navbar_navigation'>
                <div>
                    <DrawerToggleButton  onClick={onClick} toggle={toggle}/>
                </div>
                <div className='navbar_logo'><a href="/">The LOGO</a></div>
                <div className='spacer'/>
                <div className='navbar_navigation-items'>
                    <ul> 
                        <NavLink to='/home'>
                        <li>Home</li>
                        </NavLink>
                        <NavLink to='/addmovieform'> 
                        <li>Add Movie</li>
                        </NavLink>
                        <NavLink to='/contactus'>
                        <li>Contact Us</li>
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