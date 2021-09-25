import './Main.css'

import React from 'react';
import Selection from '../Selection/Selection';
import Animals from '../Animals/Animals';
import Budget from '../Budget/Budget';

const Main = () => {
    return (
        <div className='main-section'>
            <div className="bg-overlay">
                <Selection></Selection>
                <Animals></Animals>
                <Budget></Budget>
            </div>
        </div>
    );
};

export default Main;