import {React} from 'react'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './NavBar.css'


function NavBar ({onClick, toggle}) {
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
                        <li><a href="/">Home</a> </li>
                        <li><a href="/">Watch Later</a> </li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}



export default NavBar;