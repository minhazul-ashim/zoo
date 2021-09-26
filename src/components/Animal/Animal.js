import './Animal.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const Animal = (props) => {

    const { name, kingdom, lifespan, budget, foodHabit, img } = props.data;

    const icon = <FontAwesomeIcon icon={faPlus} />

    const clickFunc = props.func;

    return (
        <div className='animal-box'>
            <div className="img-div">
                <img className='img' src={img} alt="" />
            </div>
            <div className="animal-info">
                <h3 className='animal-name'>{name}</h3>
                <p>Kingdom: {kingdom}</p>
                <p>Lifespan: {lifespan}</p>
                <p>Food: {foodHabit}</p>
                <p className='animal-budget'>Budget: {budget}</p>
                <button onClick={() => clickFunc(budget, name)}>{icon} Add</button>
            </div>
        </div>
    );
};

export default Animal;