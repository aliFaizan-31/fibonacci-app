import React from 'react';
import '../App.css';
import Logo from '../assets/icons/fib-logo.svg';

function Navbar() {
    return (
        <div className="navbar flex-start-center">
            <img src={Logo} alt='' className='fib-logo' />
            <h1 className='header-title white-clr m-0'>Fibonacci Sequence</h1>
        </div>
    );
}

export default Navbar;
