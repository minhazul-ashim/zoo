import './Main.css'

import React, { useEffect, useState } from 'react';
import Selection from '../Selection/Selection';
import Animals from '../Animals/Animals';
import Budget from '../Budget/Budget';

const Main = () => {

    const [animals, setAnimals] = useState([]);

    const [allBudget, setBudget] = useState([]);

    useEffect(() => {

        fetch('./animals.JSON')
            .then(res => res.json())
            .then(data => setAnimals(data))
    }, [])

    const handleClick = (budget) => {

        const newBudget = [...allBudget, budget]
        setBudget(newBudget);
    }

    return (
        <div className='main-section'>
            <div className="bg-overlay">
                <Selection></Selection>
                <Animals data={animals} func={handleClick}></Animals>
                <Budget data={allBudget}></Budget>
            </div>
        </div>
    );
};

export default Main;