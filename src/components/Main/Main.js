import './Main.css'
import React, { useEffect, useState } from 'react';
import Animals from '../Animals/Animals';
import Budget from '../Budget/Budget';

const Main = () => {

    const [animals, setAnimals] = useState([]);

    const [allBudget, setBudget] = useState([]);

    const [animalArr, setAnimalArr] = useState([]);

    useEffect(() => {

        fetch('./animals.JSON')
            .then(res => res.json())
            .then(data => setAnimals(data))
    }, [])

    const handleClick = (budget, name) => {

        const newBudget = [...allBudget, budget]
        setBudget(newBudget);
        const newAnimal = [...animalArr, name];
        setAnimalArr(newAnimal);
    }

    return (
        <div className='main-section'>
            <div className="bg-overlay">
                <Animals data={animals} func={handleClick}></Animals>
                <Budget budget={allBudget} name={animalArr}></Budget>
            </div>
        </div>
    );
};

export default Main;