import './Main.css'

import React from 'react';
import Selection from '../Selection/Selection';
import Animals from '../Animals/Animals';
import Budget from '../Budget/Budget';

const Main = () => {
    return (
        <div className='main-section'>
            <Selection></Selection>
            <Animals></Animals>
            <Budget></Budget>
        </div>
    );
};

export default Main;