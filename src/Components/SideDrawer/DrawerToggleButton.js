import React from 'react';
import './DrawerToggleButton.css'


const DrawerToggleButton = ({onClick, toggle}) => (
    <button className="toggle-button" onClick={() => onClick(toggle)}>
        <div className='toggle-button_line' />
        <div className='toggle-button_line'/>
        <div className='toggle-button_line'/>
    </button>
);

export default DrawerToggleButton;