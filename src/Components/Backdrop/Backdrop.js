import React from 'react';
import './Backdrop.css'

const Backdrop = ({onClick, toggle}) => (
    <button onClick={onClick}>
        <div className='backdrop' ></div>
    </button>
);



export default Backdrop;