import React from 'react';
import './SideDrawer.css';
import {Link} from 'react-router-dom';




const siderDrawer = props => (
    <nav className='side-drawer'>
        <ul>
            <li><Link to="/home">Home</Link> </li>
            <li><Link to="/addmovieform">Add Movie</Link> </li>
            <li><Link to="/contactus">Contact Us</Link> </li>
        </ul>
    </nav>

);










export default siderDrawer;