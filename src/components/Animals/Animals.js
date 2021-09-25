import React, { useEffect, useState } from 'react';
import Animal from '../Animal/Animal';
import './Animals.css'

const Animals = () => {

    const [animals, setAnimals] = useState([])

    useEffect(() => {

        fetch('./animals.JSON')
            .then(res => res.json())
            .then(data => setAnimals(data))
    }, [])

    return (
        <div className='animals-container'>
            {
                animals.map(animal => <Animal key={animal.name} data={animal}></Animal>)
            }
        </div>
    );
};

export default Animals;