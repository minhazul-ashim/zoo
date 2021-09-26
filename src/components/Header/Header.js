import './Header.css'

import React from 'react';

//These are the codes of the header component;
const Header = () => {
    return (
        <div className='header'>
            <div className="header-text">
                <h1 className='header-title'>Zoo Arena</h1>
                <p>Choose your own animals from the collection of many animals in a budget and make your own zoo!</p>
                <br />
                <h3 className='header-budget'>Budget: $200000</h3>
            </div>
        </div>
    );
};

export default Header;