import './Main.css'
import React, { useEffect, useState } from 'react';
import Animals from '../Animals/Animals';
import Budget from '../Budget/Budget';

//This is the parent component for all the data and states;

const Main = () => {

    //This state changes and loads the data for every animal card;
    const [animals, setAnimals] = useState([]);

    //This state stores data for calculating the budget;
    const [allBudget, setBudget] = useState([]);

    //This state stores the names of the selected animals and used for displaying their names;
    const [animalArr, setAnimalArr] = useState([]);

    useEffect(() => {

        fetch('./animals.JSON')
            .then(res => res.json())
            .then(data => setAnimals(data))
    }, [])

    //This click handler is called onClick from the button of animal card.
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