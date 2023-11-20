import React from 'react';
import ReactDOM from 'react-dom';
import Vector from '../images/Vector.png';

function Navbar() {
    return (
        <nav>
            <img src={Vector} className='nav--logo' alt='Logo'/>
        </nav>
    )
}

export default Navbar;